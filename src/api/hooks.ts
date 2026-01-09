import { useQuery } from "@tanstack/react-query"
import { fetchGetPosts } from "./fetches"

export const useGetPosts = () => {
    return useQuery ({
        queryKey: ["posts"],
        queryFn: () => fetchGetPosts()
    })
}