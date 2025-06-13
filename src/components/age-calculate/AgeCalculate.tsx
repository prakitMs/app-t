"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export function AgeCal() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const date = format(data.dob, "dd MMMM yyyy");
    const toDay = new Date();

    const yearNow = toDay.getFullYear();
    const yourDate = Number(format(date, "yyyy"));

    let age = 0;
    let mAge = 0;

    if (toDay.getMonth() < data.dob.getMonth()) {
      age = yearNow - yourDate - 1;
    } else {
      age = yearNow - yourDate;
    }

    if (toDay.getMonth() > data.dob.getMonth()) {
      mAge = toDay.getMonth() - data.dob.getMonth();
    } else {
      mAge = toDay.getMonth() - data.dob.getMonth() + 12;
    }

    toast("Event has been created", {
      description: (
        <>
          <div>Your birthday is {date}</div>
          <div>
            Your age is {age} Y {mAge} M
          </div>
        </>
      ),
    });
  }

  return (
    <div className="bg-gradient-to-t from-violet-300 to-slate-300/50 w-[330px] rounded-xl m-3 p-3 flex justify-center shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black">
                  What is your birthday ?
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription className="text-black">
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
