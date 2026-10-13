import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://czkpwupgpeyvaxcskpvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a3B3dXBncGV5dmF4Y3NrcHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NTQ5MjksImV4cCI6MjEwNzQzMDkyOX0.v-qp4_b5NPYiO2hjiD0vRe5QSHtdhgpYqDatMxeXQu0'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('Estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes()