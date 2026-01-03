import { useEffect, useState } from 'react';
import { supabase } from '/src/supabaseClient';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data?.user);
            if (data?.user) loadRole(data.user.id);
        });
    }, []);

    async function loadRole(userId) {
        const { data } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', userId)
            .single();

        setRole(data.role);
    }

    return { user, role };
}
