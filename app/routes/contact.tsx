import React from "react"
import Container from "~/components/common/container"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Checkbox } from "~/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "~/components/ui/field"
import { Button } from "~/components/ui/button"
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import CustomAccordion from "~/components/custom/custom-accordian"
import { Link } from "lucide-react"
import { GoArrowRight } from "react-icons/go"

type Props = {}

export default function Contact({}: Props) {
  return (
    <section className="pb-14 md:pb-20 lg:pb-25">
      {/* Banner */}
      <div
        className="px-4 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-45 lg:pb-24"
        style={{
          backgroundImage: "url('/images/playerbanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative">
          <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>

          <p className="commonP mx-auto mt-4 max-w-2xl text-center">
            Have a question? We're here to help.
          </p>
        </div>
      </div>

      {/* message and contact */}
      <Container>
        <div className="mt-10 flex flex-col gap-6 md:mt-16 lg:flex-row lg:gap-10">
          {/* message form */}
          <div className="w-full rounded-xl border border-primary/10 bg-white p-5 sm:p-8 lg:flex-1">
            <h2 className="text-xl font-bold">Send Us a Message</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="mt-4">
                <p className="font-inter text-base font-medium text-[#1E1E24]">
                  Full Name *
                </p>
                <Input
                  className="rounded-full py-4"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mt-4">
                <p className="font-inter text-base font-medium text-[#1E1E24]">
                  Email Address *
                </p>
                <Input
                  className="rounded-full py-4"
                  placeholder="Enter your email address"
                  type="email"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="font-inter text-base font-medium text-[#1E1E24]">
                Subject *
              </p>
              <Input
                className="rounded-full py-4"
                placeholder="e.g. Order enquiry, Authenticity question"
              />
            </div>
            <div className="mt-4">
              <p className="font-inter text-base font-medium text-[#1E1E24]">
                Message *
              </p>
              <Textarea
                className="rounded-2xl py-4"
                placeholder="e.g. Order enquiry, Authenticity question"
              />
            </div>

            {/* agree to terms */}
            <FieldGroup className="my-5 w-full sm:w-56">
              <Field orientation="horizontal">
                <Checkbox
                  id="terms-checkbox-basic"
                  name="terms-checkbox-basic"
                />
                <FieldLabel htmlFor="terms-checkbox-basic">
                  Accept terms and conditions
                </FieldLabel>
              </Field>
            </FieldGroup>

            <Button
              className="w-full rounded-full px-6 py-5 sm:w-auto"
              style={{
                background: "linear-gradient(172deg,#5A38F5 0%,#9A3FF1 100%)",
              }}
            >
              Send Message
            </Button>
          </div>

          {/* contact details */}
          <div className="w-full rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 lg:max-w-md">
            <h2 className="mb-8 text-xl font-bold">Contact Details</h2>

            {/* Email */}
            <div className="pb-3">
              <p className="text-sm text-gray-500">Email</p>
              <p className="mt-1 text-lg font-medium break-all">hello@fangram.com</p>
            </div>

            <hr className="border-gray-200" />

            {/* Support Hours */}
            <div className="py-3">
              <p className="text-sm text-gray-500">Support Hours</p>
              <p className="mt-1 text-lg font-medium">
                Mon – Fri | 9 AM – 6 PM IST
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Response Time */}
            <div className="py-3">
              <p className="text-sm text-gray-500">Response Time</p>
              <p className="mt-1 text-lg font-medium">Within 24–48 hours</p>
            </div>

            <hr className="border-gray-200" />

            {/* Social */}
            <div className="pt-6">
              <p className="mb-4 text-sm text-gray-500">Follow Us</p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-100"
                >
                  <BsTwitter size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-100"
                >
                  <BsInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-100"
                >
                  <BsYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* faq section */}
        <div className="mt-16 md:mt-20 lg:mt-25">
          <h2 className="text-center text-2xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="commonP mx-auto mt-3 max-w-2xl text-center">
            Quick answers to common queries
          </p>

          {/* questions */}
          <div className="mx-auto mt-10 max-w-180 space-y-3">
            <CustomAccordion
              defaultOpen
              title="What is the delivery timeline for signed items?"
              className="bg-transparent!"
            >
              All pre-order items are shipped within 30 days of purchase. You
              will receive tracking information via email once your order is
              dispatched.
            </CustomAccordion>
            <CustomAccordion
              title="What is your refund policy?"
              className="bg-transparent!"
            >
              We offer a 7-day return window for unopened items. Opened items
              cannot be returned due to authenticity concerns. Contact support
              for assistance.
            </CustomAccordion>
            <CustomAccordion
              title="How do you guarantee authenticity?"
              className="bg-transparent!"
            >
              Every item is signed during official sessions and comes with a
              Certificate of Authenticity featuring a unique serial number,
              hologram seal, and QR verification.
            </CustomAccordion>
            <CustomAccordion
              title="How do subscriptions work?"
              className="bg-transparent!"
            >
              Fangram Insider is a monthly subscription at ₹499/month. You get
              early access to drops, exclusive content, and priority messaging.
              Cancel anytime.
            </CustomAccordion>
          </div>

          {/* foot banner */}
          <div className="py-14 md:py-20 lg:py-25">
            <Container>
              <div
                className="rounded-3xl px-6 py-14 sm:px-10 md:py-16 lg:px-16 lg:py-20"
                style={{
                  backgroundImage: "url('/images/authbg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
                  Need urgent assistance?
                </h2>

                <p className="commonP mx-auto mt-4 max-w-2xl text-center">
                  Email our support team directly and we'll prioritise your request.
                </p>

                <div className="mt-8 flex justify-center">
                  <Button
                    style={{
                      background:
                        "linear-gradient(172deg,#5A38F5 0%,#9A3FF1 100%)",
                    }}
                    className="w-full items-center justify-center gap-2 rounded-full px-6 py-5.5 text-center font-inter text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:text-base"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </section>
  )
}