import useAuth from './useAuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: role = '', isLoading, error } = useQuery({
        queryKey: ['role', user?.phone],
        enabled: !loading && !!user?.phone,
        queryFn: async () => {
            try {
                const response = await axiosSecure(`/users/${user?.phone}`);
                const { data } = response;
                if (!data || !data.role) {
                    throw new Error('Role data is missing or undefined');
                }
                return data.role;
            } catch (error) {
                console.error('Error fetching user role:', error);
                throw error;
            }
        },
    });

    if (error) {
        console.error('Error in useRole hook:', error);
    }

    return [role, isLoading];
};

export default useRole;
