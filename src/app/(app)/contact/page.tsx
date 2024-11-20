"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useToast } from "@/hooks/use-toast"
import BlurFade from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@wanderlust.com", "support@wanderlust.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Travel Street", "Adventure City, AC 12345"],
  },
]

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ data })
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    })
    form.reset()
  }

  return (
    <article>
      {/* Hero Section */}
      <section className="relative flex h-[40vh] min-h-[400px] items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative px-4 text-center text-white">
          <BlurFade>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/90">
              We&apos;d love to hear from you. Let us help plan your next
              adventure.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((item, idx) => (
                <BlurFade key={idx} delay={0.1 * idx}>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="size-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <BlurFade delay={0.3}>
                <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="How can we help?"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your travel plans..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        <Send className="mr-2 size-4" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
