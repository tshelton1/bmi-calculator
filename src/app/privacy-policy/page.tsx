// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, LegalSection } from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Living Healthier collects, uses, and protects information when you use our health calculators and guides.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

// TODO: Confirm effective date with counsel before publishing.
const EFFECTIVE_DATE = "June 22, 2026";
const ENTITY = "Living Healthier LLC";
const CONTACT_EMAIL = "support@livinghealthier.net";

const TOC = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "adsense", title: "Google AdSense and Advertising" },
  { id: "cookies", title: "Cookies" },
  { id: "data-sharing", title: "Data Sharing and Third Parties" },
  { id: "ccpa", title: "California Privacy Rights (CCPA)" },
  { id: "gdpr", title: "GDPR Rights (European Users)" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "children", title: "Children's Privacy" },
  { id: "external-links", title: "Links to Other Websites" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      effectiveDate={EFFECTIVE_DATE}
      toc={[...TOC]}
    >
      <LegalSection id="introduction" title="Introduction">
        <p>
          {ENTITY} (&quot;Living Healthier,&quot; &quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;) operates livinghealthier.net, which provides free
          health calculators (including BMI, BMR, calorie needs, macros, and
          body fat estimates) and related educational content.
        </p>
        <p>
          This Privacy Policy explains what information may be collected when
          you visit our site, how it is used, and the choices available to you.
          By using the site, you agree to the practices described here.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="Information We Collect">
        <p>
          <strong className="text-ink">Calculator inputs.</strong> Our
          calculators run in your browser using client-side JavaScript. Values
          you enter — such as height, weight, age, sex, activity level, and
          body measurements — are used locally on your device to produce
          results. We do not require an account, and we do not store calculator
          inputs on our servers in a way that ties them to your identity.
        </p>
        <p>
          In some cases, optional values (for example, BMR or weight) may appear
          in the page URL when you follow a link from one calculator to another
          page on this site. Those parameters are used only to display
          contextual information on that visit. They are not saved to a user
          profile because this site does not offer user accounts.
        </p>
        <p>
          <strong className="text-ink">Information you send us directly.</strong>{" "}
          If you contact us by email, we receive the information you choose to
          include in your message (such as your email address and message
          content).
        </p>
        <p>
          <strong className="text-ink">Automatically collected information.</strong>{" "}
          Like most websites, our hosting and infrastructure providers may
          process standard technical data when you visit the site — for example,
          IP address, browser type, device information, referring URL, and
          pages viewed. This information is typically collected in server or
          application logs for security, performance, and operations.
        </p>
        {/* TODO: Attorney review — confirm hosting/log retention practices with your provider before publishing. */}
      </LegalSection>

      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p>We use information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>operate, maintain, and improve the site and calculators;</li>
          <li>respond to inquiries you send us;</li>
          <li>understand aggregate traffic and usage patterns;</li>
          <li>display advertising through third-party partners;</li>
          <li>protect the security and integrity of the site;</li>
          <li>comply with applicable legal obligations.</li>
        </ul>
        <p>
          We do not use calculator inputs to create individualized health
          profiles on our servers, and we do not sell personal information in
          the ordinary sense of exchanging user lists for money.
        </p>
      </LegalSection>

      <LegalSection id="adsense" title="Google AdSense and Advertising">
        <p>
          We use Google AdSense to display advertisements. Google and its
          partners may use cookies and similar technologies to serve ads based
          on your visits to this site and other sites on the Internet.
        </p>
        <p>
          Ad personalization may involve the collection and use of information
          about your browsing activity over time. You can learn more and manage
          ad personalization through{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-clay underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . You may also visit{" "}
          <a
            href="https://www.aboutads.info/choices/"
            className="text-clay underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info
          </a>{" "}
          for additional opt-out resources in the United States.
        </p>
        <p>
          For more information about how Google uses data from sites that use its
          services, see{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            className="text-clay underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s partner sites policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies">
        <p>
          Cookies are small text files stored on your device. We and our
          third-party partners (including advertising partners) may use cookies
          and similar technologies to remember preferences, measure traffic,
          and deliver ads.
        </p>
        <p>
          You can control cookies through your browser settings. Blocking or
          deleting cookies may affect site functionality or ad relevance.
        </p>
      </LegalSection>

      <LegalSection id="data-sharing" title="Data Sharing and Third Parties">
        <p>We may share information with:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-ink">Service providers</strong> that help
            us host and operate the site (for example, hosting and content
            delivery providers);
          </li>
          <li>
            <strong className="text-ink">Advertising partners</strong> such as
            Google AdSense;
          </li>
          <li>
            <strong className="text-ink">Affiliate partners</strong> when you
            click outbound links (for example, Amazon product links on our
            protein recommendations page) — those sites receive their own
            traffic data under their policies;
          </li>
          <li>
            <strong className="text-ink">Legal and safety recipients</strong>{" "}
            when required by law or to protect rights, safety, and security.
          </li>
        </ul>
        {/* TODO: Attorney review — list specific subprocessors if your counsel requires a named vendor schedule. */}
      </LegalSection>

      <LegalSection id="ccpa" title="California Privacy Rights (CCPA)">
        <p>
          If you are a California resident, you may have rights under the
          California Consumer Privacy Act (CCPA) and related laws, which can
          include the right to know what personal information is collected, to
          request deletion of certain information, and to opt out of certain
          data sharing practices.
        </p>
        <p>
          Because our calculators do not require accounts and calculator inputs
          are processed client-side, we may have limited personal information
          tied to identifiable individuals beyond what is described in this
          policy. To exercise applicable rights, contact us using the
          information in the Contact Us section below.
        </p>
        {/* TODO: Attorney review — confirm CCPA applicability and required disclosures for your business. */}
      </LegalSection>

      <LegalSection id="gdpr" title="GDPR Rights (European Users)">
        <p>
          If you are located in the European Economic Area, the United Kingdom,
          or another jurisdiction with similar data protection laws, you may
          have rights such as access, correction, deletion, restriction,
          objection, and data portability, subject to applicable law.
        </p>
        <p>
          Our legal basis for processing may include legitimate interests in
          operating and improving the site, your consent where required (such
          as for certain cookies or marketing), and compliance with legal
          obligations. Contact us to submit a request or ask questions about
          your rights.
        </p>
        {/* TODO: Attorney review — confirm lawful basis, DPO requirements, and EU representative needs if applicable. */}
      </LegalSection>

      <LegalSection id="data-security" title="Data Security">
        <p>
          We use reasonable administrative, technical, and organizational
          measures designed to protect information. No method of transmission
          over the Internet or electronic storage is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="data-retention" title="Data Retention">
        <p>
          We retain information only as long as reasonably necessary for the
          purposes described in this policy, unless a longer retention period
          is required or permitted by law. Server logs and similar operational
          data are generally retained for a limited period consistent with our
          hosting provider&apos;s practices and business needs.
        </p>
        {/* TODO: Attorney review — document actual retention periods for logs, email, and vendor data. */}
      </LegalSection>

      <LegalSection id="children" title="Children's Privacy">
        <p>
          Living Healthier is not directed at children under 13 years of age,
          and we do not knowingly collect personal information from children
          under 13. If you believe a child has provided us personal
          information, please contact us and we will take appropriate steps to
          delete it.
        </p>
      </LegalSection>

      <LegalSection id="external-links" title="Links to Other Websites">
        <p>
          Our site may link to third-party websites (including affiliate
          retailers and reference resources). We are not responsible for the
          privacy practices of those sites. We encourage you to review their
          privacy policies before providing personal information.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The effective
          date at the top of this page will reflect the latest version.
          Continued use of the site after changes are posted constitutes
          acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact Us">
        <p>
          Questions about this Privacy Policy or our privacy practices may be
          directed to {ENTITY}:
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>
          You may also use our{" "}
          <Link href="/contact" className="text-clay underline">
            contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
