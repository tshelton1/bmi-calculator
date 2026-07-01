// src/app/terms-of-service/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, LegalSection } from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of Living Healthier's free health calculators, guides, and related content.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
};

// TODO: Confirm effective date with counsel before publishing.
const EFFECTIVE_DATE = "June 22, 2026";
const ENTITY = "Living Healthier LLC";
const CONTACT_EMAIL = "support@livinghealthier.net";
// TODO: Attorney review — confirm the state where Living Healthier LLC is registered/operating.
const GOVERNING_LAW_STATE = "[State]";

const TOC = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "description", title: "Description of Service" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "calculator-disclaimer", title: "Calculator Results Disclaimer" },
  { id: "affiliates-ads", title: "Affiliate Relationships and Advertising" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "third-party-links", title: "Third Party Links" },
  { id: "disclaimer-warranties", title: "Disclaimer of Warranties" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "termination", title: "Termination" },
] as const;

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      effectiveDate={EFFECTIVE_DATE}
      toc={[...TOC]}
    >
      <LegalSection id="acceptance" title="Acceptance of Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of livinghealthier.net (the &quot;Site&quot;), operated by{" "}
          {ENTITY} (&quot;Living Healthier,&quot; &quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;). By accessing or using the Site, you agree to
          these Terms. If you do not agree, do not use the Site.
        </p>
      </LegalSection>

      <LegalSection id="description" title="Description of Service">
        <p>
          Living Healthier provides free, browser-based health calculators —
          including BMI, basal metabolic rate (BMR), daily calorie needs
          (TDEE), macro targets, and body fat percentage estimates — along with
          educational articles and product recommendation pages. The Site does
          not require user registration or accounts.
        </p>
        <p>
          Calculator inputs are processed on your device to generate results. The
          Site is intended for general informational and educational purposes
          only.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            use the Site in any way that violates applicable law or regulation;
          </li>
          <li>
            attempt to interfere with the Site&apos;s operation, security, or
            integrity;
          </li>
          <li>
            scrape, crawl, or harvest data from the Site in a manner that
            exceeds normal personal use without our permission;
          </li>
          <li>
            misrepresent your affiliation with Living Healthier or imply that we
            endorse you without authorization;
          </li>
          <li>
            use calculator outputs as a substitute for professional medical
            judgment or emergency care.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="calculator-disclaimer" title="Calculator Results Disclaimer">
        <p>
          <strong className="text-ink">
            Calculator results are general estimates for informational purposes
            only.
          </strong>{" "}
          They are not medical advice, diagnosis, treatment, or a recommendation
          to take or avoid any specific action regarding your health, nutrition,
          or fitness.
        </p>
        <p>
          Results from BMI, BMR, calorie, macro, and body fat tools are based
          on published formulas and the inputs you provide. They do not account
          for your full medical history, medications, body composition nuances,
          pregnancy, underlying conditions, or other individual factors that may
          materially affect what is appropriate for you.
        </p>
        <p>
          Do not rely on these tools for emergency or urgent health situations.
          Always consult a licensed healthcare provider before making health,
          weight, nutrition, or exercise decisions — especially if you have a
          medical condition, are pregnant or nursing, or are under 18.
        </p>
        <p>
          Nothing on this Site creates a doctor-patient or clinician-patient
          relationship. Educational content here is general in nature and is
          not personalized guidance directed at you as an individual.
        </p>
      </LegalSection>

      <LegalSection id="affiliates-ads" title="Affiliate Relationships and Advertising">
        <p>
          livinghealthier.net is a participant in the Amazon Services LLC
          Associates Program, an affiliate advertising program designed to
          provide a means for sites to earn advertising fees by advertising and
          linking to Amazon.com. Some pages include affiliate links to
          third-party products. If you click an affiliate link and make a
          purchase, we may earn a commission at no additional cost to you.
        </p>
        <p>
          We also display advertisements served by Google AdSense and may
          display other third-party ads in the future. Advertising and affiliate
          relationships do not influence the underlying calculator formulas or
          the general educational information presented on the Site, but they
          may influence which products we choose to highlight on recommendation
          pages.
        </p>
        <p>
          This page contains affiliate links and advertising. See our{" "}
          <Link href="/privacy-policy" className="text-clay underline">
            Privacy Policy
          </Link>{" "}
          for information about cookies and third-party data practices.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual Property">
        <p>
          The Site&apos;s design, text, branding, and original content are
          owned by {ENTITY} or its licensors and are protected by applicable
          intellectual property laws. You may view and use the Site for
          personal, non-commercial purposes. You may not copy, modify,
          distribute, or create derivative works from Site content without our
          prior written permission, except as permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="third-party-links" title="Third Party Links">
        <p>
          The Site may contain links to third-party websites, including
          affiliate retailers and external references. We do not control and are
          not responsible for the content, policies, or practices of third-party
          sites. Your use of third-party sites is at your own risk and subject
          to their terms and policies.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer-warranties" title="Disclaimer of Warranties">
        <p>
          THE SITE AND ALL CALCULATORS, CONTENT, AND RESULTS ARE PROVIDED
          &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
          ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the Site will be uninterrupted, error-free,
          or free of harmful components, or that calculator results will be
          accurate or suitable for your circumstances.
        </p>
      </LegalSection>

      <LegalSection id="limitation-liability" title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {ENTITY.toUpperCase()} AND ITS
          OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR
          ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO
          YOUR USE OF THE SITE OR RELIANCE ON CALCULATOR RESULTS OR CONTENT —
          EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          Our total liability for any claim arising from these Terms or the Site
          will not exceed the greater of (a) the amount you paid us to use the
          Site in the twelve months before the claim (which, for a free site,
          is typically zero) or (b) one hundred U.S. dollars ($100), unless
          applicable law requires otherwise.
        </p>
        {/* TODO: Attorney review — liability cap and exclusions for your jurisdiction and entity structure. */}
      </LegalSection>

      <LegalSection id="indemnification" title="Indemnification">
        <p>
          You agree to defend, indemnify, and hold harmless {ENTITY} and its
          officers, directors, employees, and agents from and against any
          claims, damages, losses, liabilities, and expenses (including
          reasonable attorneys&apos; fees) arising from your use of the Site,
          your violation of these Terms, or your violation of any rights of a
          third party.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing Law">
        <p>
          These Terms are governed by the laws of the State of{" "}
          {GOVERNING_LAW_STATE}, without regard to conflict-of-law principles,
          except where federal law applies. Any dispute arising under these
          Terms will be brought in the state or federal courts located in that
          state, and you consent to their jurisdiction.
        </p>
        {/* TODO: Attorney review — confirm forum, venue, and arbitration clauses if desired. */}
      </LegalSection>

      <LegalSection id="changes" title="Changes to Terms">
        <p>
          We may update these Terms from time to time. The effective date at
          the top of this page indicates the current version. Continued use of
          the Site after changes are posted constitutes acceptance of the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Termination">
        <p>
          We may suspend or terminate access to the Site at any time, with or
          without notice, for any reason, including if we believe you have
          violated these Terms. Provisions that by their nature should survive
          termination — including disclaimers, limitations of liability, and
          indemnification — will survive.
        </p>
        <p>
          Questions about these Terms may be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or via our{" "}
          <Link href="/contact" className="text-clay underline">
            contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
