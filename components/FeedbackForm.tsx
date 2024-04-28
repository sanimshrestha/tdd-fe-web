"use client"
import { feedbackSchemaInput } from "@server/schema/feedback.schema"
import { Button } from "@ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@ui/dialog"
import { Input } from "@ui/input"
import { useCreateFeedbackMutation } from "@redux/services/feedbacks"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import { Checkbox } from "./ui/checkbox"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "./ui/form"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "./ui/select"
import { Textarea } from "./ui/textarea"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { setFeedbackDialogOpen, uiState } from "@redux/features/ui"
import { useToast } from "./ui/use-toast"
import MessageSmileSquare from "@icons/MessageSmileSquare"
import SubmitButton from "./ui/submitButton"

export function FeedbackForm({ children }: { children?: React.ReactNode }) {
  const [createFeedback] = useCreateFeedbackMutation();
  const feedbackDialogOpen = useAppSelector<uiState['feedbackDialogOpen']>
    ((state) => state.ui.feedbackDialogOpen);
  const dispatch = useAppDispatch();
  const { toast } = useToast()

  const [feedbackPlaceholder, setfeedbackPlaceholder] =
    useState("Tell us about your experience with The Drinks Diary...");

  const onOpenChange = (open: boolean) => {
    dispatch(setFeedbackDialogOpen(open))
  }

  const onFeedbackTypeChange = (value: string) => {
    switch (value) {
      case "Bug Report":
        setfeedbackPlaceholder("What went wrong? \
        What were you expecting to happen? \
        How can we recreate the scenario you encountered?...")
        break;
      default:
        setfeedbackPlaceholder("Tell us about your experience\
        with The Drinks Diary...");
        break;
    }
  }

  const form = useForm<z.infer<typeof feedbackSchemaInput>>({
    resolver: zodResolver(feedbackSchemaInput),
    defaultValues: {
      email: "",
      name: "",
      feedbackType: "Feedback",
      feedbackMessage: "",
      contactConsent: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof feedbackSchemaInput>) => {
    try {
      await createFeedback(values).unwrap();
      toast({
        title: "Feedback sent successfully",
        variant: "success"
      })
      dispatch(setFeedbackDialogOpen(false))
      form.reset()
    } catch (error) {
      toast({
        title: "Network issue, please try again in a while",
        variant: "destructive"
      })
    }
  }

  return (
    <Dialog open={feedbackDialogOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children || <Button
          variant={"secondary"}
          onClick={() => form.reset()}
        >
          <MessageSmileSquare
            color="none"
          />
          <span className="hidden md:block ml-1">
            Send feedback
          </span>
        </Button>
        }
      </DialogTrigger>
      <DialogContent className="w-full-margin max-w-[640px] max-h-full-margin 
                                  overflow-auto gap-2 xs:gap-4">
        <DialogHeader className="flex flex-col items-center text-center">
          <DialogTitle className="text-base sm:text-h1 text-center">
            Feedback form
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2  xs:my-2  gap-2 sm:gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2 lg:col-span-1">
                  <FormLabel> Your email address*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2 lg:col-span-1">
                  <FormLabel> Your name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedbackType"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Type of feedback*</FormLabel>
                  <Select
                    onValueChange=
                    {(e) => { onFeedbackTypeChange(e); field.onChange(e); }}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Feedback">Feedback</SelectItem>
                      <SelectItem value="Bug Report">Bug Report</SelectItem>
                      <SelectItem value="Suggestions">Suggestions</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedbackMessage"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel> Your feedback*</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder={feedbackPlaceholder}
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactConsent"
              render={({ field }) => (
                <FormItem className="col-span-2 flex gap-3 
                                      space-y-0 sm:space-y-0">
                  <FormControl>
                    <Checkbox
                      className="mt-0.5"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="mt-0 text-xs xs:text-sm">
                    I am ok being contacted by The Drinks Diary team
                    for further information about my feedback (Optional)
                  </FormLabel>
                </FormItem>
              )}
            />
            <span className="col-span-2 text-xs xs:text-base 
                              text-center text-muted-foreground">
              We respect your privacy and will never share your information
              with others or contact you without your consent.
            </span>
            <div className="col-span-2 flex sm:grid 
                            sm:grid-cols-2 items-center gap-4">
              <SubmitButton
                type="submit"
                className="w-fit ml-auto"
                disabled={form.formState.isSubmitting}
              >
                Send Feedback
              </SubmitButton>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-fit mr-auto">
                  Close
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog >
  )
}

export default FeedbackForm
