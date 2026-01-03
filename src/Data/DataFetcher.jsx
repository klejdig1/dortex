import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';

function DataFetcher() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('users').select('*');
            if (error) console.error(error);
            else setData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Data from Supabase:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default DataFetcher;
