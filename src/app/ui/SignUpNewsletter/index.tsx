'use client';
import signUptoNewsLetter from "@/app/actions";
import React from "react";
import { useFormState } from 'react-dom';
import PrimaryButton from "../Button/PrimaryButton";
import { constants } from '@/app/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';


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



const SignUpNewsletter = () => {
  const [state, formAction] = useFormState(signUptoNewsLetter, initialState)

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <div className='flex flex-col items-center gap-1 sm:gap-2 
       w-full grow-[0.25] z-[1]'>
      <h2 className="text-text text-xl md:text-2xl leading-6 2xl:leading-10 ">
        {heading[state.status]}
      </h2>
      <p className='text-text text-sm sm:text-base 2xl:leading-5'>
        {headingDesc[state.status]}
      </p>

      <motion.form action={formAction}
        className="relative flex flex-col gap-2 sm:gap-3 md:gap-4 mt-1 
                    sm:mt-4 items-center w-full">
        <motion.div className="w-full flex flex-col gap-2 max-w-80">
          {[Status.Initial, Status.Invalid].includes(state.status) &&
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={`bg-primary border py-2 sm:py-2.5 px-3.5 rounded-lg 
                  border-border-primary text-text-tertiary w-full text-sm
                    focus:outline-none focus:ring-2 focus:ring-light max-w-80 
                    ${state.status === Status.Invalid && 'border-error'}`}
            />}
          <AnimatePresence>
            {state.status === Status.Invalid &&
              <motion.p
                variants={item}
                className='text-error text-xs sm:text-sm ml-0 '>
                Please enter a valid email address
              </motion.p>}
          </AnimatePresence>
        </motion.div>

        {state.status !== Status.Success &&
          <PrimaryButton text={buttonText[state.status]} type="submit" />
        }
      </motion.form>
    </div>


  )
};

export default SignUpNewsletter;
