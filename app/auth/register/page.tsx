'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card'
import Link from 'next/link'
import { register as registerUser } from '@/app/api/route'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log( data.name, data.email,data.password );
      await registerUser(data.name, data.email, data.password)
      toast.success('Registration successful. Please log in.')
      router.push('/auth/login')
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Register for R.A.S.A.D.</CardTitle>
          <CardDescription>Create your account to start booking flights</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register('name')}
                className="bg-gray-700 text-white"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                className="bg-gray-700 text-white"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                className="bg-gray-700 text-white"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className="bg-gray-700 text-white"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/auth/login" className="text-blue-400 hover:underline">
            Already have an account? Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

