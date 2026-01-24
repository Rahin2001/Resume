const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('index.html', () => {
  let dom;
  const htmlPath = path.join(__dirname, 'index.html');

  beforeAll(() => {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    dom = new JSDOM(htmlContent);
  });

  describe('Document structure', () => {
    test('has correct doctype', () => {
      expect(dom.doctype.name).toBe('html');
    });

    test('has html element with lang attribute', () => {
      const html = dom.window.document.querySelector('html');
      expect(html.getAttribute('lang')).toBe('en');
    });

    test('contains head and body elements', () => {
      expect(dom.window.document.head).toBeDefined();
      expect(dom.window.document.body).toBeDefined();
    });
  });

  describe('Meta tags', () => {
    test('has primary meta tags', () => {
      const title = dom.window.document.querySelector('title');
      expect(title.textContent).toBe('DevXIntel - AI-Powered Code Review & Testing Automation Platform');

      const description = dom.window.document.querySelector('meta[name="description"]');
      expect(description.getAttribute('content')).toContain('AI-powered code review');

      const keywords = dom.window.document.querySelector('meta[name="keywords"]');
      expect(keywords.getAttribute('content')).toContain('AI code review');

      const robots = dom.window.document.querySelector('meta[name="robots"]');
      expect(robots.getAttribute('content')).toBe('index, follow');

      const themeColor = dom.window.document.querySelector('meta[name="theme-color"]');
      expect(themeColor.getAttribute('content')).toBe('#667eea');
    });

    test('has Open Graph tags', () => {
      const ogTitle = dom.window.document.querySelector('meta[property="og:title"]');
      expect(ogTitle.getAttribute('content')).toBe('DevXIntel - AI-Powered Code Review & Testing Automation Platform');

      const ogDescription = dom.window.document.querySelector('meta[property="og:description"]');
      expect(ogDescription.getAttribute('content')).toContain('AI-powered code review');

      const ogType = dom.window.document.querySelector('meta[property="og:type"]');
      expect(ogType.getAttribute('content')).toBe('website');

      const ogUrl = dom.window.document.querySelector('meta[property="og:url"]');
      expect(ogUrl.getAttribute('content')).toBe('https://devxintel.com/');

      const ogImage = dom.window.document.querySelector('meta[property="og:image"]');
      expect(ogImage.getAttribute('content')).toBe('https://devxintel.com/og-image.jpg');
    });

    test('has Twitter tags', () => {
      const twitterCard = dom.window.document.querySelector('meta[property="twitter:card"]');
      expect(twitterCard.getAttribute('content')).toBe('summary_large_image');

      const twitterTitle = dom.window.document.querySelector('meta[property="twitter:title"]');
      expect(twitterTitle.getAttribute('content')).toContain('DevXIntel - AI-Powered Code Review');

      const twitterDescription = dom.window.document.querySelector('meta[property="twitter:description"]');
      expect(twitterDescription.getAttribute('content')).toContain('AI-powered code review');
    });

    test('has Apple-specific tags', () => {
      const appleWebApp = dom.window.document.querySelector('meta[name="apple-mobile-web-app-capable"]');
      expect(appleWebApp.getAttribute('content')).toBe('yes');

      const appleStatusBar = dom.window.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      expect(appleStatusBar.getAttribute('content')).toBe('default');

      const appleTitle = dom.window.document.querySelector('meta[name="apple-mobile-web-app-title"]');
      expect(appleTitle.getAttribute('content')).toBe('DevXIntel');
    });

    test('has canonical URL', () => {
      const canonical = dom.window.document.querySelector('link[rel="canonical"]');
      expect(canonical.getAttribute('href')).toBe('https://devxintel.com/');
    });
  });

  describe('Structured data', () => {
    let softwareAppJson;
    let organizationJson;

    beforeAll(() => {
      const scripts = dom.window.document.querySelectorAll('script[type="application/ld+json"]');
      softwareAppJson = JSON.parse(scripts[0].textContent);
      organizationJson = JSON.parse(scripts[1].textContent);
    });

    test('SoftwareApplication structured data', () => {
      expect(softwareAppJson['@type']).toBe('SoftwareApplication');
      expect(softwareAppJson.name).toBe('DevXIntel');
      expect(softwareAppJson.url).toBe('https://devxintel.com');
      expect(softwareAppJson.applicationCategory).toBe('DeveloperApplication');
      expect(softwareAppJson.operatingSystem).toBe('Web');
      expect(softwareAppJson.offers.price).toBe('0');
      expect(softwareAppJson.featureList).toContain('AI-powered code review');
      expect(softwareAppJson.featureList).toContain('Automated test case generation');
    });

    test('Organization structured data', () => {
      expect(organizationJson['@type']).toBe('Organization');
      expect(organizationJson.name).toBe('DevXIntel');
      expect(organizationJson.foundingDate).toBe('2024');
      expect(organizationJson.contactPoint.email).toBe('contact@devxintel.com');
      expect(organizationJson.sameAs).toContain('https://twitter.com/devxintel');
      expect(organizationJson.sameAs).toContain('https://linkedin.com/company/devxintel');
    });
  });

  describe('External resources', () => {
    test('has Vite icon', () => {
      const icon = dom.window.document.querySelector('link[rel="icon"]');
      expect(icon.getAttribute('type')).toBe('image/svg+xml');
      expect(icon.getAttribute('href')).toBe('/vite.svg');
    });

    test('has font preconnects', () => {
      const preconnects = dom.window.document.querySelectorAll('link[rel="preconnect"]');
      expect(preconnects.length).toBe(2);
      expect(preconnects[0].getAttribute('href')).toBe('https://fonts.googleapis.com');
      expect(preconnects[1].getAttribute('href')).toBe('https://fonts.gstatic.com');
    });
  });

  describe('Application entry point', () => {
    test('has root div', () => {
      const root = dom.window.document.querySelector('#root');
      expect(root).toBeDefined();
    });

    test('has main script module', () => {
      const script = dom.window.document.querySelector('script[type="module"]');
      expect(script.getAttribute('src')).toBe('/src/main.tsx');
    });
  });
});