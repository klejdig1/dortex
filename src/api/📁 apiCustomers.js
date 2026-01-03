import { supabase } from '/src/supabaseClient.js';

   // GET ALL CUSTOMERS
export async function getCustomers() {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) throw error;
    return data;
}

   // GET CUSTOMER BY ID
export async function getCustomerById(id) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data;
}

   // CREATE CUSTOMER
export async function createCustomer(customer) {
    const { data, error } = await supabase
        .from('users')
        .insert([customer])
        .select()
        .single();

    if (error) throw error;
    return data;
}

   // UPDATE CUSTOMER
export async function updateCustomer(id, updates) {
    const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data;
}


   // DELETE CUSTOMER

export async function deleteCustomer(id) {
    const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

    if (error) throw error;
}
