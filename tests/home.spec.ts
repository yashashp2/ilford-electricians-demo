import { expect, test } from "@playwright/test";
test("form stays disabled without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000/");
  await expect(page.getByLabel("Your name")).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Preview quote request" }),
  ).toBeDisabled();
  await expect(page.locator("noscript p")).toBeVisible();
  await context.close();
});

test("tablet and small-phone widths fit the viewport", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(process.env.TEST_BASE_URL ?? "/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});
test("page, responsive layout, images, contacts and disclosure", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(process.env.TEST_BASE_URL ?? "/");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Reliable Electriciansin Ilford.",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await expect(page.locator(".concept-banner")).toContainText(
    "not the official business website",
  );
  expect(
    await page.locator('a[href="tel:+442087190078"]').count(),
  ).toBeGreaterThan(2);
  expect(
    await page
      .locator('a[href="mailto:info@ilford-electricians.co.uk"]')
      .count(),
  ).toBeGreaterThan(0);
  for (const section of ["services", "about", "areas", "contact"]) {
    await page.locator(`#${section}`).scrollIntoViewIfNeeded();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.locator(".gallery-grid").scrollIntoViewIfNeeded();
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (node: HTMLImageElement) => node.complete && node.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-homepage.png`,
    fullPage: true,
    scale: "css",
  });
  expect(errors).toEqual([]);
});
test("demo form validates and never submits or persists entries", async ({
  page,
}) => {
  await page.goto(process.env.TEST_BASE_URL ?? "/");
  await page.getByRole("button", { name: "Preview quote request" }).click();
  await expect(page.locator("form").getByRole("alert")).toHaveText(
    "Please check the highlighted fields.",
  );
  await expect(page.getByLabel("Your name")).toBeFocused();
  await expect(page.locator('[aria-invalid="true"]')).toHaveCount(6);
  await page.getByLabel("Your name").fill("Demo Tester");
  await page.getByLabel("Phone number").fill("07700 900000");
  await page.getByLabel("Email address").fill("demo@example.com");
  await page.getByLabel("Property postcode").fill("IG1 2JA");
  await page
    .getByLabel("What can we help with?")
    .selectOption("Lighting Installations");
  await page
    .getByLabel("Tell us about the work")
    .fill("Sample enquiry for a kitchen lighting installation.");
  const requests: string[] = [];
  page.on("request", (request) => {
    if (
      request.method() !== "GET" ||
      request.url().includes("demo@example.com")
    )
      requests.push(request.url());
  });
  await page.getByRole("button", { name: "Preview quote request" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Demo complete. Nothing was sent.",
  );
  expect(requests).toEqual([]);
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
      cookies: document.cookie,
    })),
  ).toEqual({ local: 0, session: 0, cookies: "" });
  await page.getByRole("button", { name: "Try the form again" }).click();
  await expect(page.getByLabel("Your name")).toHaveValue("");
});
test("navigation and keyboard FAQ", async ({ page }, testInfo) => {
  await page.goto(process.env.TEST_BASE_URL ?? "/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(
      page.getByRole("button", { name: "Close menu" }),
    ).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Services" })
      .click();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeHidden();
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Services" })
      .click();
  }
  await expect(page).toHaveURL(/#services$/);
  const summary = page.locator("summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});
