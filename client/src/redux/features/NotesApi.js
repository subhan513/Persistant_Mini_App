import { apiSlice } from "../api/apiSlice";
import { getAllNotes, getAllPinnedNotes, getNode } from "./NotesSlice";

const NoteApi = apiSlice.injectEndpoints({
  endpoints : (builder) =>({
     createNote : builder.mutation({
      query : (data)=>({
        url : 'create-notes',
        method : 'POST',
        body : data
      })
    }),
    getNotes : builder.mutation({
      query : ()=>({
        url : "getallNotes",
        method : "GET",
      }),
      async onQueryStarted(arg,{queryFulfilled,dispatch}){
        try {
           const result = await queryFulfilled;
            dispatch(
            getAllNotes({
              Notes: result.data.Notes,
            })
          );
        } catch (error) {
          console.log(error);
        }
      }
    }),
UpdateNote: builder.mutation({
  query: ({ id, data }) => ({
    url: `update-notes/${id}`,
    method: "PUT",
    body: data,
  }),
}),
    getNode : builder.mutation({
      query : (id)=>({
        url : `get-note/${id}`,
        method : "GET",
      }),
      async onQueryStarted(arg,{dispatch,queryFulfilled}){
        try {
          const result = await queryFulfilled;
          dispatch(getNode({
            Note : result.data.data
          }))
        } catch (error) {
          console.log(error)
        }
      } 
    }),
    deleteNote : builder.mutation({
      query : (id)=>({
        url : `delete-notes/${id}`,
        method : "delete"
      })
    }) ,
    getAllPinnedTasks : builder.mutation({
      query : ()=>({
        url : "getallPinnedNotes",
        method : "GET"
      }),
      async onQueryStarted(arg,{dispatch,queryFulfilled}){
        try {
            const result = await queryFulfilled;
        dispatch(getAllPinnedNotes( {
          PinnedTasks : result.data.getAllTasks
        }));
        } catch (error) {
          console.log(error);
        }
      }
    }),
    UpdatePinnedTask : builder.mutation({
      query : (id)=>({
        url : `Update-Pintask/${id}`,
        method : "PUT",
      })
    })
  })
})

export const {useCreateNoteMutation,useGetNotesMutation,useUpdateNoteMutation,useGetNodeMutation,useDeleteNoteMutation,useGetAllPinnedTasksMutation,useUpdatePinnedTaskMutation} = NoteApi;