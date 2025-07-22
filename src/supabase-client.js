
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bloixsxfqzyhfvwtlyxz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsb2l4c3hmcXp5aGZ2d3RseXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTgwOTAsImV4cCI6MjA2Nzg5NDA5MH0.QnraYV04lBQADqhOyXh4TyMltiTIbNhv2zCCez6rV98'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase