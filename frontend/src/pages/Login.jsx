import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner'
import {AxiosInstance} from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/store/authSlice';

function Login() {
  const {loading,users} = useSelector((state) => state.auth)
  console.log("loading" , loading,users);
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true))
      const resp = await AxiosInstance.post('/v1/user/login', formData);
      if (resp?.data?.success === true) {
        navigate('/');
        toast.success(resp.data?.message);
        console.log("res" , resp.data?.user);
        dispatch(setUser(resp.data?.user))
      }
      setFormData({
        email: '',
        password: '',
      });
      dispatch(setLoading(false))
    } catch (error) {
      console.error("Error in login:", error.response.data?.message || error.message);
      toast.error(error.response.data?.message || "Login failed");
      dispatch(setLoading(false))
    }finally{
      dispatch(setLoading(false))
    }
  };

  
  return (
    <div className="flex flex-col md:flex-row max-w-6xl shadow-2xl m-4 p-10 rounded-xl mx-auto md:pt-14 min-h-screen">
      {/* Left Image */}
      <div className="hidden md:block flex-1">
        <img
          className="w-full h-full object-cover object-top rounded-xl"
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop"
          alt="Fashion"
        />
      </div>

      {/* Right Form */}
      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">Login to Account</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <Label className='py-2' >Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  onChange={onChangeInput}
                  value={formData.email}
                  className="dark:border-gray-600 dark:bg-gray-900"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Label className='py-2' >Password</Label>
                <Input
                  type={isOpenPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  name="password"
                  onChange={onChangeInput}
                  value={formData.password}
                  className="dark:border-gray-600 dark:bg-gray-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsOpenPass(!isOpenPass)}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {isOpenPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={loading} className="w-full cursor-pointer">
                {loading ? (<span className='flex  justify-center items-center gap-2'><Loader2 className='size-5 transition-all animate-spin duration-150' />Loading...</span> ) : 'Sign In'}
              </Button>

              {/* Link to login */}
              <p className="text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link
                  to="/signup"
                  className="underline font-semibold hover:text-gray-900 dark:hover:text-white"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
