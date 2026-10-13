import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://czkpwupgpeyvaxcskpvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a3B3dXBncGV5dmF4Y3NrcHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NTQ5MjksImV4cCI6MjEwNzQzMDkyOX0.v-qp4_b5NPYiO2hjiD0vRe5QSHtdhgpYqDatMxeXQu0' 
const supabase = createClient(supabaseUrl, supabaseKey)

async function ejecutarPractica() {
  console.log('1. Insertando estudiante...')
  const { error: errorInsertar } = await supabase
    .from('Estudiantes')
    .insert([
      { nombre: 'Armando Rosales', carrera: 'Ingeniería de Software' }
    ])

  if (errorInsertar) {
    console.log('❌ Error al insertar:', errorInsertar)
    return; 
  }
  
  console.log('✅ Estudiante insertado correctamente.')
  console.log('2. Consultando la base de datos...')

  const { data, error: errorLeer } = await supabase
    .from('Estudiantes')
    .select('*')

  if (errorLeer) {
    console.log('❌ Error al leer:', errorLeer)
  } else {
    console.log('📋 Datos actualizados:', data)
  }
}

ejecutarPractica()