'use client';
import React from "react";
import { useFormState } from 'react-dom';
import PrimaryButton from "../Button/PrimaryButton";
import { constants } from '../../lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import signUptoNewsLetter from "@/api/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export enum Status {
  Initial = 'INITIAL',
  Success = 'SUCCESS',
  Error = 'ERROR',
  Invalid = 'INVALID',
  Duplicate = 'DUPLICATE',
}

const initialState = {
  status: Status.Initial,
}

const heading = {
  [Status.Initial]: "Coming soon",
  [Status.Invalid]: "Coming soon",
  [Status.Success]: "Awesome!",
  [Status.Error]: "Uh-oh",
  [Status.Duplicate]: "Sweet!",
}

const headingDesc = {
  [Status.Initial]: constants.productDescription,
  [Status.Invalid]: constants.productDescription,
  [Status.Success]: "Thanks for signing up! 🥂",
  [Status.Error]: "Looks like we're having issues.",
  [Status.Duplicate]: "You were already signed up!",
}

const buttonText = {
  [Status.Initial]: "Sign up for updates",
  [Status.Invalid]: "Sign up for updates",
  [Status.Success]: "Sign up for updates",
  [Status.Error]: "Try again",
  [Status.Duplicate]: "Use another email",
}

const MotionButton = motion(Button)
const MotionInput = motion(Input)



const SignUpNewsletter = () => {
  const [state, formAction] = useFormState(signUptoNewsLetter, initialState)

  const item = {
    // hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <div className='flex flex-col items-center gap-1 sm:gap-2 
       w-full grow-[0.25] z-[1]'>
      <h2 className="text-foreground text-xl md:text-2xl 
                      leading-6 2xl:leading-10 ">
        {heading[state.status]}
      </h2>
      <p className='text-foreground text-sm sm:text-base 2xl:leading-5'>
        {headingDesc[state.status]}
      </p>

      <motion.form action={formAction}
        className="relative flex flex-col gap-2 sm:gap-3 md:gap-4 mt-1 
                    sm:mt-4 items-center w-full max-w-80">
        <motion.div className="w-full flex flex-col gap-2">

          {[Status.Initial, Status.Invalid].includes(state.status) &&
            <MotionInput
              layout
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={
                `${state.status === Status.Invalid && 'border-destructive'}`
              }
            />
          }
          <AnimatePresence>
            {state.status === Status.Invalid &&
              <motion.p
                variants={item}
                className='text-destructive text-xs sm:text-sm ml-0 '>
                Please enter a valid email address
              </motion.p>}
          </AnimatePresence>
        </motion.div>

        {state.status !== Status.Success &&
          // <PrimaryButton text={buttonText[state.status]} type="submit" />
          <MotionButton
            layout
            className="w-full"
            type="submit"
          >
            {buttonText[state.status]}
          </MotionButton>
        }
      </motion.form>
    </div>


  )
};

export default SignUpNewsletter;
