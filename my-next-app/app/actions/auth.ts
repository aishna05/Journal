import { SignupFormSchema, FormState } from '../lib/definations'
 
export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  console.log("validatedFields", validatedFields)
  const { name, email, password } = validatedFields.data
    console.log("validatedFields.data", validatedFields.data) 
 
  // Call the provider or db to create a user...

  //Yaha par post request bhejna hai signup ke liye
}