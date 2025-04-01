-- Run this SQL in your Supabase SQL Editor to create the contacts table

CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  services TEXT[] NOT NULL,
  message TEXT NOT NULL,
  urgency TEXT,
  budget TEXT,
  newsletter BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed BOOLEAN DEFAULT FALSE,
  notes TEXT
);

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow anonymous inserts to contacts" 
  ON contacts FOR INSERT 
  WITH CHECK (true);

-- Enable RLS on the table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
