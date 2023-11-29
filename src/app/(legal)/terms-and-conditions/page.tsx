import { style } from "@mui/system";
import Link from "next/link";
import React from "react";
import styles from "@/app/page.module.css";
import text from "@/data/text.json";

const TermsAndCondition = () => {
  return (
    <div>
      <div className="bg-pagebg h-[95vh] bg-no-repeat bg-cover bg-center">
        <div className="h-full w-full flex flex-col justify-center items-center gap-[25px] pt-[30px]">
          <h1 className="text-white text-2xl xl:text-4xl lg:text-3xl font-semibold font-['source-code-pro']">
            {text.Terms_and_Conditions.main_heading}
          </h1>
          <div className="flex bg-[#00000073] w-[70%] h-[70%] rounded-[30px] text-white p-[50px]">
            <div className="w-full h-full flex flex-col gap-[35px] overflow-x-hidden overflow-y-auto font-['source-code-pro']">
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-['source-code-pro']">
                {text.Terms_and_Conditions.Data.intro}
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.Poppets_LLC}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.Poppets_Provider}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.purpose}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.services}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.privacy}
                </p>
                <br />

                <ul className={styles.orderlist}>
                  <li>{text.Terms_and_Conditions.Data.sole_descretion}</li>
                  <li>{text.Terms_and_Conditions.Data.PPAL}</li>
                  <li>{text.Terms_and_Conditions.Data.collect}</li>
                </ul>

                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.Acception}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.Terms_of_service}
                </p>
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                {text.Terms_and_Conditions.Data.USE_OF_THE_SERVICE}
              </h4>
              <div>
                <ul className={styles.orderlist}>
                  <li>{text.Terms_and_Conditions.Data.Creation}</li>
                </ul>

                <br />

                {text.Terms_and_Conditions.Data.volunteer}

                <br />

                <ul className={styles.orderlist}>
                  <li>{text.Terms_and_Conditions.Data.access}</li>
                </ul>

                <br />
                {text.Terms_and_Conditions.Data.compliance}

                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.licensor}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.Guideline}
                </p>
                <br />

                <ul className={styles.orderlist}>
                  <li>General Terms: </li>
                </ul>

                <ul className={styles.orderlist}>
                  <li>{text.Terms_and_Conditions.Data.agreement}</li>
                  <br />
                  <li>{text.Terms_and_Conditions.Data.eligibility}</li>
                  <br />
                  <li>{text.Terms_and_Conditions.Data.additional_term}</li>
                  <br />
                  <li>{text.Terms_and_Conditions.Data.change_service}</li>
                  <br />
                  <li>{text.Terms_and_Conditions.Data.Privacy_Policy}</li>
                  <br />
                  <li>{text.Terms_and_Conditions.Data.permission}</li>
                </ul>

                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                III. INTELLECTUAL PROPERTY RIGHTS
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.intellectual}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2022; &nbsp; Copyright:
                  </b>
                  {text.Terms_and_Conditions.Data.clarity}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2022; &nbsp; Trademarks:
                  </b>
                  {text.Terms_and_Conditions.Data.trademarks}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                IV. ACCESS TO THE SERVICES AND ACCOUNT INFORMATION
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.registeration}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.liable}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                V. INFORMATION SUBMITTED THROUGH THE SERVICES.
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.submission}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                VI. RULES OF CONDUCT AND PROHIBITIONS
              </h4>
              <div>
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2022; &nbsp; Rules of
                    Conduct:
                  </b>
                  {text.Terms_and_Conditions.Data.digital_content}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2022; &nbsp; Prohibited
                    Usage:
                  </b>
                  {text.Terms_and_Conditions.Data.connection}
                </p>
                <br />

                <ul className={styles.orderlist}>
                  <li>{text.Terms_and_Conditions.Data.Use_service}</li>
                  <li>{text.Terms_and_Conditions.Data.Attempt_to_trademark}</li>
                  <li>{text.Terms_and_Conditions.Data.utilize_service}</li>
                  <li>{text.Terms_and_Conditions.Data.create}</li>
                  <li>
                    Use the Services or Digital Content for any fraudulent or
                    unlawful purpose;
                  </li>
                  <li>
                    Harvest or collect Personal Information about other users of
                    the Services without such other users’ consent.
                  </li>
                  <li>{text.Terms_and_Conditions.Data.interfere}</li>
                  <li>
                    Restrict or inhibit any other person from using the Services
                    (including by hacking or defacing any portion of the
                    Services).
                  </li>
                  <li>{text.Terms_and_Conditions.Data.modify}</li>
                  <li>{text.Terms_and_Conditions.Data.create_databade}</li>
                  <li>{text.Terms_and_Conditions.Data.upload}</li>
                  <li>{text.Terms_and_Conditions.Data.robot}</li>
                </ul>

                <br />

                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.implement}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.foregoing}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                VII. COMMUNICATIONS
              </h4>
              <div>
                <p className="text-[18px]">
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Electronic Notices: </b>
                  {text.Terms_and_Conditions.Data.personal_info}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Customer Support, Feedback
                    and Input, and Surveys:
                  </b>
                  {text.Terms_and_Conditions.Data.capability}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                VIII. MONITORING AND CONSEQUENCES OF VIOLATING THESE TERMS
              </h4>
              <div>
                <p className="text-[18px]">
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Monitoring: </b>
                  {text.Terms_and_Conditions.Data.monitoring}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Termination: </b>
                  {text.Terms_and_Conditions.Data.temination}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                IX. LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES
              </h4>
              <div>
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Disclaimer of Warranties:
                  </b>
                  {text.Terms_and_Conditions.Data.waranties}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.company_parties}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.Agreed}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Limitation of Liability:
                  </b>
                  {text.Terms_and_Conditions.Data.limitations}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.exclusions}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Indentification: </b>
                  {text.Terms_and_Conditions.Data.identification}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                X. MISCELLANEOUS TERMS
              </h4>
              <div>
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Compliance with Applicable
                    Laws:
                  </b>
                  {text.Terms_and_Conditions.Data.applicable_law}
                </p>
                <br />
                <p className="text-[18px]">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {text.Terms_and_Conditions.Data.law1}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. General: </b>
                  {text.Terms_and_Conditions.Data.general}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Governing Law and
                    Arbitration Provision:
                  </b>
                  {text.Terms_and_Conditions.Data.arbitration}
                </p>
                <br />
                <p className="text-[18px]">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Class Waiver and Waiver of
                    Jury Trial:
                  </b>
                  {text.Terms_and_Conditions.Data.jury_trial}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                CONTACT INFORMATION:
              </h4>
              <div>
                <p className="text-[18px]">
                  Plague Poppets LLC
                  <br />
                  4616 25th Ave NE #255 <br />
                  Seattle, WA 98105 <br />
                  <Link
                    href="#"
                    target="_blank"
                    className="text-blue-800 underline text-lg"
                  >
                    info@PlaguePoppets.com
                  </Link>
                </p>
                <br />
              </div>
              <h4 className="font-bold text-2xl text-white font-serif flex justify-center">
                PRIVACY POLICY
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.protection}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.adviced}
                </p>
                <br />
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.visit}
                </p>
                <br />
                <p className="text-[18px]">
                  If you have any questions about this privacy policy, you
                  should contact us by email at info@PlaguePoppets.com.
                  <Link
                    href="#"
                    target="_blank"
                    className="text-blue-800 underline text-lg"
                  >
                    info@PlaguePoppets.com
                  </Link>
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                POLICY ON COLLECTING INFORMATION ON THE PLAGUE POPPETS WEBSITE
              </h4>
              <div>
               
                    <ul className={styles.orderlist}>
                      <li>Personal Information</li>
                    </ul>
                
                  {text.Terms_and_Conditions.Data.Poppet_info}
              
                <br />
           
                    <ul className={styles.orderlist}>
                      <li>Anonymous Information: Traffic Data</li>
                    </ul>
                 
                  {text.Terms_and_Conditions.Data["anonymus-info"]}
              
                <br />
               
                    <ul className={styles.orderlist}>
                      <li>E-mails to Plague Poppets</li>
                    </ul>
                 
                  {text.Terms_and_Conditions.Data.email_to_plaguepoppet}
               
                <br />
                
                    <ul className={styles.orderlist}>
                      <li>Children 16 & Under</li>
                    </ul>
               
                  {text.Terms_and_Conditions.Data.under_16}
               
                <br />
               
                    <ul className={styles.orderlist}>
                      <li>Cookies</li>
                    </ul>
                
                  {text.Terms_and_Conditions.Data.cookies}
            
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                POLICY ON THE USE & DISCLOSURE OF INFORMATION COLLECTED ON THE
                PLAGUE POPPETS WEBSITE
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.sell}
                </p>
                <br />
                
                    <ul className={styles.orderlist}>
                      <li>Promotional Communications</li>
                    </ul>
                
                  {text.Terms_and_Conditions.Data.personal_communication}
               
                <br />
               
                    <ul className={styles.orderlist}>
                      <li>Personal Information Disclosed to Outside Vendors</li>
                    </ul>
                  
                  {text.Terms_and_Conditions.Data.vendors}
               
                <br />
                
                    <ul className={styles.orderlist}>
                      <li>Anonymous Information</li>
                    </ul>
                
                  {text.Terms_and_Conditions.Data.information_vistor}
               
                <br />
                
                    <ul className={styles.orderlist}>
                      <li>Emergency Situations</li>
                    </ul>
                
                  {text.Terms_and_Conditions.Data.emergency}
              
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                SECURITY
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.security}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                REVISIONS TO PRIVACY POLICY
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.revisions}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                GOVERNING LAW & JURISDICTION
              </h4>
              <div>
                <p className="text-[18px]">
                  {text.Terms_and_Conditions.Data.jurisdiction}
                </p>
                <br />
              </div>
              <h4 className="font-bold text-lg xl:text-2xl lg:text-2xl text-white font-serif">
                CONTACT PLAGUE POPPETS
              </h4>
              <div>
                <p className="text-[18px]">
                  Direct all questions regarding our Privacy Policy to:
                </p>
                <br />
                <p className="text-[18px]">
                  Plague Poppets LLC
                  <br />
                  4616 25th Ave NE #255 <br />
                  Seattle, WA 98105 <br />
                  <Link
                    href="#"
                    target="_blank"
                    className="text-blue-800 text-lg underline"
                  >
                    info@PlaguePoppets.com
                  </Link>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
