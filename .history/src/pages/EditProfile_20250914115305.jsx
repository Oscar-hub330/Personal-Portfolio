import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditProfile(){
  const { register, handleSubmit } = useForm({
    defaultValues: { name: '', headline: '', bio: '', skills: '' }
  });

  function onSubmit(data){
    // TODO: call supabase or firebase to save, and handle image upload
    console.log('save', data);
  }

  return (
    <div className="min-h-screen flex items-start justify-center p-6">
      <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg font-medium mb-4">Edit Profile</h2>
        <TextField fullWidth label="Full name" {...register('name')} margin="normal" />
        <TextField fullWidth label="Headline" {...register('headline')} margin="normal" />
        <TextField fullWidth label="Bio" {...register('bio')} margin="normal" multiline rows={4} />
        <TextField fullWidth label="Skills (comma separated)" {...register('skills')} margin="normal" />
        <div className="flex gap-3 mt-4">
          <Button type="submit" variant="contained">Save</Button>
        </div>
      </form>
    </div>
  );
}
