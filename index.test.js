import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('index.html', () => {
  let htmlContent;
  let document;
  let window;

  beforeAll(() => {
    const indexPath = path.join(__dirname, '../index.html');
    htmlContent = fs.readFileSync(indexPath, 'utf8');
    const dom = new JSDOM(htmlContent, {
      url: 'https://devxintel.com/',
      pretendToBeVisual: true,
      resources: 'usable'
    });
    document = dom.window.document;
    window = dom.window;
  });

  describe('HTML Structure', () => {
    test('should have proper HTML5 doctype', () => {
      expect(htmlContent).toMatch(/<!doctype html>/i);
    });

    test('should have html element with lang attribute', () => {
      const htmlElement = document.querySelector('html');
      expect(htmlElement).toBeTruthy();
      expect(htmlElement.getAttribute('lang')).toBe('en');
    });

    test('should have head and body elements', () => {
      expect(document.head).toBeTruthy();
      expect(document.body).toBeTruthy();
    });

    test('should have root div in body', () => {
      const rootDiv = document.getElementById('root');
      expect(rootDiv).toBeTruthy();
      expect(rootDiv.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('Meta Tags', () => {
    test('should have charset meta tag', () => {
      const charsetMeta = document.querySelector('meta[charset="UTF-8"]');
      expect(charsetMeta).toBeTruthy();
    });

    test('should have viewport meta tag', () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      expect(viewportMeta).toBeTruthy();
      expect(viewportMeta.getAttribute('content')).toContain('width=device-width');
      expect(viewportMeta.getAttribute('content')).toContain('initial-scale=1.0');
    });

    test('should have favicon link', () => {
      const faviconLink = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
      expect(faviconLink).toBeTruthy();
      expect(faviconLink.getAttribute('href')).toBe('/vite.svg');
    });

    test('should have canonical URL', () => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      expect(canonicalLink).toBeTruthy();
      expect(canonicalLink.getAttribute('href')).toBe('https://devxintel.com/');
    });

    test('should have preconnect links', () => {
      const preconnectLinks = document.querySelectorAll('link[rel="preconnect"]');
      expect(preconnectLinks.length).toBeGreaterThan(0);
      
      const fontsPreconnect = Array.from(preconnectLinks).find(link => 
        link.getAttribute('href') === 'https://fonts.googleapis.com'
      );
      expect(fontsPreconnect).toBeTruthy();
    });
  });

  describe('Primary Meta Tags', () => {
    test('should have title tag', () => {
      const title = document.querySelector('title');
      expect(title).toBeTruthy();
      expect(title.textContent).toBe('DevXIntel - AI-Powered Code Review & Testing Automation Platform');
    });

    test('should have meta title', () => {
      const metaTitle = document.querySelector('meta[name="title"]');
      expect(metaTitle).toBeTruthy();
      expect(metaTitle.getAttribute('content')).toBe('DevXIntel - AI-Powered Code Review & Testing Automation Platform');
    });

    test('should have meta description', () => {
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription).toBeTruthy();
      expect(metaDescription.getAttribute('content')).toContain('AI-powered code review');
    });

    test('should have meta keywords', () => {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      expect(metaKeywords).toBeTruthy();
      expect(metaKeywords.getAttribute('content')).toContain('AI code review');
    });

    test('should have author meta tag', () => {
      const metaAuthor = document.querySelector('meta[name="author"]');
      expect(metaAuthor).toBeTruthy();
      expect(metaAuthor.getAttribute('content')).toBe('DevXIntel');
    });

    test('should have robots meta tag', () => {
      const metaRobots = document.querySelector('meta[name="robots"]');
      expect(metaRobots).toBeTruthy();
      expect(metaRobots.getAttribute('content')).toBe('index, follow');
    });
  });

  describe('Open Graph Meta Tags', () => {
    test('should have og:type', () => {
      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType).toBeTruthy();
      expect(ogType.getAttribute('content')).toBe('website');
    });

    test('should have og:url', () => {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      expect(ogUrl).toBeTruthy();
      expect(ogUrl.getAttribute('content')).toBe('https://devxintel.com/');
    });

    test('should have og:title', () => {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle).toBeTruthy();
      expect(ogTitle.getAttribute('content')).toBe('DevXIntel - AI-Powered Code Review & Testing Automation Platform');
    });

    test('should have og:description', () => {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      expect(ogDescription).toBeTruthy();
      expect(ogDescription.getAttribute('content')).toContain('Transform your development workflow');
    });

    test('should have og:image', () => {
      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage).toBeTruthy();
      expect(ogImage.getAttribute('content')).toBe('https://devxintel.com/og-image.jpg');
    });

    test('should have og:site_name', () => {
      const ogSiteName = document.querySelector('meta[property="og:site_name"]');
      expect(ogSiteName).toBeTruthy();
      expect(ogSiteName.getAttribute('content')).toBe('DevXIntel');
    });

    test('should have og:locale', () => {
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      expect(ogLocale).toBeTruthy();
      expect(ogLocale.getAttribute('content')).toBe('en_US');
    });
  });

  describe('Twitter Meta Tags', () => {
    test('should have twitter:card', () => {
      const twitterCard = document.querySelector('meta[property="twitter:card"]');
      expect(twitterCard).toBeTruthy();
      expect(twitterCard.getAttribute('content')).toBe('summary_large_image');
    });

    test('should have twitter:url', () => {
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      expect(twitterUrl).toBeTruthy();
      expect(twitterUrl.getAttribute('content')).toBe('https://devxintel.com/');
    });

    test('should have twitter:title', () => {
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      expect(twitterTitle).toBeTruthy();
      expect(twitterTitle.getAttribute('content')).toBe('DevXIntel - AI-Powered Code Review & Testing Automation Platform');
    });

    test('should have twitter:description', () => {
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      expect(twitterDescription).toBeTruthy();
      expect(twitterDescription.getAttribute('content')).toContain('Transform your development workflow');
    });

    test('should have twitter:image', () => {
      const twitterImage = document.querySelector('meta[property="twitter:image"]');
      expect(twitterImage).toBeTruthy();
      expect(twitterImage.getAttribute('content')).toBe('https://devxintel.com/twitter-image.jpg');
    });
  });

  describe('Additional SEO Meta Tags', () => {
    test('should have theme-color meta tag', () => {
      const themeColor = document.querySelector('meta[name="theme-color"]');
      expect(themeColor).toBeTruthy();
      expect(themeColor.getAttribute('content')).toBe('#667eea');
    });

    test('should have msapplication-TileColor meta tag', () => {
      const tileColor = document.querySelector('meta[name="msapplication-TileColor"]');
      expect(tileColor).toBeTruthy();
      expect(tileColor.getAttribute('content')).toBe('#667eea');
    });

    test('should have apple-mobile-web-app-capable meta tag', () => {
      const appleCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
      expect(appleCapable).toBeTruthy();
      expect(appleCapable.getAttribute('content')).toBe('yes');
    });

    test('should have apple-mobile-web-app-status-bar-style meta tag', () => {
      const appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      expect(appleStatusBar).toBeTruthy();
      expect(appleStatusBar.getAttribute('content')).toBe('default');
    });

    test('should have apple-mobile-web-app-title meta tag', () => {
      const appleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
      expect(appleTitle).toBeTruthy();
      expect(appleTitle.getAttribute('content')).toBe('DevXIntel');
    });
  });

  describe('Structured Data', () => {
    test('should have SoftwareApplication structured data', () => {
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      expect(structuredDataScript).toBeTruthy();
      
      const structuredData = JSON.parse(structuredDataScript.textContent);
      expect(structuredData['@type']).toBe('SoftwareApplication');
      expect(structuredData.name).toBe('DevXIntel');
      expect(structuredData.applicationCategory).toBe('DeveloperApplication');
      expect(structuredData.operatingSystem).toBe('Web');
      expect(structuredData.offers.price).toBe('0');
    });

    test('should have Organization structured data', () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      const organizationScript = Array.from(scripts).find(script => {
        const data = JSON.parse(script.textContent);
        return data['@type'] === 'Organization';
      });
      
      expect(organizationScript).toBeTruthy();
      const organizationData = JSON.parse(organizationScript.textContent);
      expect(organizationData['@type']).toBe('Organization');
      expect(organizationData.name).toBe('DevXIntel');
      expect(organizationData.contactPoint.contactType).toBe('customer service');
    });
  });

  describe('Script Tags', () => {
    test('should have main script tag with module type', () => {
      const scriptTag = document.querySelector('script[type="module"]');
      expect(scriptTag).toBeTruthy();
      expect(scriptTag.getAttribute('src')).toBe('/src/main.tsx');
    });
  });

  describe('Content Validation', () => {
    test('should contain key DevXIntel references', () => {
      expect(htmlContent).toContain('DevXIntel');
      expect(htmlContent).toContain('AI-Powered Code Review');
      expect(htmlContent).toContain('Testing Automation');
    });

    test('should contain no broken links in href attributes', () => {
      const links = document.querySelectorAll('link');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          expect(href).not.toMatch(/^http[s]?:\/\/(www\.)?example\.com/);
        }
      });
    });

    test('should have valid structured data JSON', () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        expect(() => JSON.parse(script.textContent)).not.toThrow();
      });
    });
  });

  describe('Performance Optimizations', () => {
    test('should have preconnect for external domains', () => {
      const fontsPreconnect = document.querySelector('link[href="https://fonts.googleapis.com"]');
      expect(fontsPreconnect).toBeTruthy();
      expect(fontsPreconnect.getAttribute('rel')).toBe('preconnect');
    });

    test('should not have unnecessary external requests', () => {
      const externalScripts = document.querySelectorAll('script[src^="http"]');
      expect(externalScripts.length).toBeLessThan(3);
    });
  });
});