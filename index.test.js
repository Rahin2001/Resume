const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend', 'index.html');
const htmlContent = fs.readFileSync(filePath, 'utf-8');

describe('index.html SEO Meta Tag Validation', () => {

  it('should have the correct title tag', () => {
    expect(htmlContent).toContain('<title>DevXIntel - AI-Powered Code Review & Testing Automation Platform</title>');
  });

  it('should have the correct meta description tag', () => {
    expect(htmlContent).toContain('<meta name="description" content="Transform your development workflow with AI-powered code review, automated test case generation, and comprehensive testing automation. Accelerate development with intelligent code analysis and 99.9% uptime SLA." />');
  });

  it('should have the correct meta keywords tag', () => {
    expect(htmlContent).toContain('<meta name="keywords" content="AI code review, automated testing, test case generation, development automation, code analysis, CI/CD integration, software testing, quality assurance, development workflow, AI development tools" />');
  });

  it('should have the correct meta author tag', () => {
    expect(htmlContent).toContain('<meta name="author" content="DevXIntel" />');
  });

  it('should have the correct meta robots tag', () => {
    expect(htmlContent).toContain('<meta name="robots" content="index, follow" />');
  });

  it('should have the correct meta language tag', () => {
    expect(htmlContent).toContain('<meta name="language" content="English" />');
  });

  it('should have the correct meta revisit-after tag', () => {
    expect(htmlContent).toContain('<meta name="revisit-after" content="7 days" />');
  });

  it('should have the correct Open Graph type tag', () => {
    expect(htmlContent).toContain('<meta property="og:type" content="website" />');
  });

  it('should have the correct Open Graph url tag', () => {
    expect(htmlContent).toContain('<meta property="og:url" content="https://devxintel.com/" />');
  });

  it('should have the correct Open Graph title tag', () => {
    expect(htmlContent).toContain('<meta property="og:title" content="DevXIntel - AI-Powered Code Review & Testing Automation Platform" />');
  });

  it('should have the correct Open Graph description tag', () => {
    expect(htmlContent).toContain('<meta property="og:description" content="Transform your development workflow with AI-powered code review, automated test case generation, and comprehensive testing automation. Start your free trial today." />');
  });

  it('should have the correct Open Graph image tag', () => {
    expect(htmlContent).toContain('<meta property="og:image" content="https://devxintel.com/og-image.jpg" />');
  });

  it('should have the correct Open Graph site name tag', () => {
    expect(htmlContent).toContain('<meta property="og:site_name" content="DevXIntel" />');
  });

  it('should have the correct Open Graph locale tag', () => {
    expect(htmlContent).toContain('<meta property="og:locale" content="en_US" />');
  });

  it('should have the correct Twitter card tag', () => {
    expect(htmlContent).toContain('<meta property="twitter:card" content="summary_large_image" />');
  });

  it('should have the correct Twitter url tag', () => {
    expect(htmlContent).toContain('<meta property="twitter:url" content="https://devxintel.com/" />');
  });

  it('should have the correct Twitter title tag', () => {
    expect(htmlContent).toContain('<meta property="twitter:title" content="DevXIntel - AI-Powered Code Review & Testing Automation Platform" />');
  });

  it('should have the correct Twitter description tag', () => {
    expect(htmlContent).toContain('<meta property="twitter:description" content="Transform your development workflow with AI-powered code review, automated test case generation, and comprehensive testing automation. Start your free trial today." />');
  });

  it('should have the correct Twitter image tag', () => {
    expect(htmlContent).toContain('<meta property="twitter:image" content="https://devxintel.com/twitter-image.jpg" />');
  });

  it('should have the correct theme color tag', () => {
    expect(htmlContent).toContain('<meta name="theme-color" content="#667eea" />');
  });

  it('should have the correct msapplication-TileColor tag', () => {
    expect(htmlContent).toContain('<meta name="msapplication-TileColor" content="#667eea" />');
  });

  it('should have the correct apple-mobile-web-app-capable tag', () => {
    expect(htmlContent).toContain('<meta name="apple-mobile-web-app-capable" content="yes" />');
  });

  it('should have the correct apple-mobile-web-app-status-bar-style tag', () => {
    expect(htmlContent).toContain('<meta name="apple-mobile-web-app-status-bar-style" content="default" />');
  });

  it('should have the correct apple-mobile-web-app-title tag', () => {
    expect(htmlContent).toContain('<meta name="apple-mobile-web-app-title" content="DevXIntel" />');
  });

  it('should have the correct canonical URL tag', () => {
    expect(htmlContent).toContain('<link rel="canonical" href="https://devxintel.com/" />');
  });

  it('should have the correct preconnect tags', () => {
    expect(htmlContent).toContain('<link rel="preconnect" href="https://fonts.googleapis.com" />');
    expect(htmlContent).toContain('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />');
  });

  it('should have the correct SoftwareApplication structured data', () => {
    expect(htmlContent).toContain('{ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "DevXIntel", "description": "AI-powered code review and testing automation platform for development teams", "url": "https://devxintel.com", "applicationCategory": "DeveloperApplication", "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Free tier available with 100 code reviews/month" }, "provider": { "@type": "Organization", "name": "DevXIntel", "url": "https://devxintel.com" }, "featureList": [ "AI-powered code review", "Automated test case generation", "CI/CD pipeline integration", "Code coverage analysis", "Real-time monitoring", "Team collaboration tools" ] }');
  });

  it('should have the correct Organization structured data', () => {
    expect(htmlContent).toContain('{ "@context": "https://schema.org", "@type": "Organization", "name": "DevXIntel", "url": "https://devxintel.com", "logo": "https://devxintel.com/logo.png", "description": "AI-powered development platform for code review and testing automation", "foundingDate": "2024", "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "email": "contact@devxintel.com" }, "sameAs": [ "https://twitter.com/devxintel", "https://linkedin.com/company/devxintel" ] }');
  });
});