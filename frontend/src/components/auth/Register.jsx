import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { cn } from "@/lib/utils";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register({ className, ...props }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register({ nama, email, password, role: 'SISWA' });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registrasi gagal');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="bg-green-700 relative hidden lg:flex lg:flex-col lg:gap-16 lg:items-center lg:justify-center">
          <img
            src="/cover.png"
            alt="Image"
            className="w-1/2 h-auto object-contain dark:brightness-[0.2] dark:grayscale"
          />
          <div className="grid gap-4 text-center">
            <h1 className="text-4xl text-white font-bold">E-Modul Green Chemistry</h1>
            <h2 className="text-xl text-white font-semibold">Berbasis Inquiry-based Experiment</h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link to="/login" className="flex items-center gap-2 font-medium text-green-500">
              <div className="flex items-center justify-center rounded-md">
                <img src="/gr-ch.png" alt="Green Chemistry" className="w-10 h-10" />
              </div>
              <h3>E-Modul <br/>Green Chemistry</h3>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-semibold">Create your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                      Enter your information below<br/>to create your account
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input id="name" type="text" placeholder="John Doe" required value={nama} onChange={(e) => setNama(e.target.value)} />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      {/* <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a> */}
                    </div>
                    <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}  />
                  </Field>
                  <Field>
                    <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700">
                      {loading ? 'Loading...' : 'Register'}
                    </Button>
                  </Field>
                  <Field>
                    <FieldDescription className="text-center">
                      Already have an account?{" "}
                      <Link to="/login" className="underline underline-offset-4">
                        Login
                      </Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
