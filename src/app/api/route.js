export const feedback=[
  {id:1,
    message:"খাবার স্বাদ খুব ভালো ছিল"
  },
  {
    id:2,
    message:"আরো বেটার কিছু আশা করেছিলাম!"
  },{
    id:3,
    message:"এখানকার পরিবেশ খুবই ভালো একদম ১০/১০!"
  }
]

export async function GET() {
  return Response.json({ 
    status:200,
    message: 'Yahooo Api was created!!!' })
}