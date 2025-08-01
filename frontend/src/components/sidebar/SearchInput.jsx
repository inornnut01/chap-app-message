import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversations from "../zustand/useConversations.js";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedCoversation } = useConversations();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters");
    }

    const conversation = conversations.find(
      (c) =>
        c.fullName.toLowerCase() ===
        search.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedCoversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered w-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
