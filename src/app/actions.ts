'use server'
import { z } from 'zod'
import { subscribeToNewsletter } from './lib/mongodb/api'
import { stat } from 'fs'
 
const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})

enum Status {
  Initial = 'INITIAL',
  Success = 'SUCCESS',
  Error = 'ERROR',
  Invalid = 'INVALID',
  Duplicate = 'DUPLICATE',
}
 
export default async function signUptoNewsLetter(
  prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })


  let status;

  // eslint-disable-next-line max-len
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 

  if(!validatedFields.success || validatedFields.data.email.length==0){
    return {
      status:  ((prevState.status == Status.Duplicate) ||
      (prevState.status == Status.Error)
      )?Status.Initial:  Status.Invalid,
    }
  }
  if(!validatedFields.data.email.match(validEmailRegex)){
    return {
      status: Status.Invalid,
    }
  }
  const result = await subscribeToNewsletter(validatedFields.data.email);
  if(result.acknowledged){
    status= Status.Success
  
  }
  else if(result.code == 11000){
    status= Status.Duplicate
  }
  else{ 
    status= Status.Error
  }
  return { status }
}