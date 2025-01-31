import { createClient } from '@supabase/supabase-js';

// Obtén las variables del archivo .env
// eslint-disable-next-line no-undef
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// eslint-disable-next-line no-undef
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Verifica que las variables estén definidas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('REACT_APP_SUPABASE_URL y REACT_APP_SUPABASE_ANON_KEY son requeridos.');
}

// Inicializa el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
