import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArry] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArry(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard ✅", { theme: "light" });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    if (ref.current.src.includes("eyecross")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savepassword = () => {
    if (!form.site || !form.username || !form.password) {
      toast.warn("Please fill all fields");
      return;
    }
    const newEntry = { ...form, id: uuidv4() };
    const updatedList = [...passwordArray, newEntry];
    setpasswordArry(updatedList);
    localStorage.setItem("passwords", JSON.stringify(updatedList));
    setform({ site: "", username: "", password: "" });
    toast.success("Password saved successfully");
  };

  const deletepassword = (id) => {
    if (confirm("Do you really want to delete this password?")) {
      const updatedList = passwordArray.filter((item) => item.id !== id);
      setpasswordArry(updatedList);
      localStorage.setItem("passwords", JSON.stringify(updatedList));
      toast.error("Password deleted");
    }
  };

  const editpassword = (id) => {
    const toEdit = passwordArray.find((item) => item.id === id);
    setform(toEdit);
    setpasswordArry(passwordArray.filter((item) => item.id !== id));
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-10 px-4 md:px-20">
        <div className="bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-2">
            <span className="text-green-500">&lt;</span>Pass
            <span className="text-green-500">OP/&gt;</span>
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Your Secure Password Manager
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              value={form.site}
              onChange={handlechange}
              placeholder="🔗 Website URL"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm shadow-sm"
              type="text"
              name="site"
              id="site"
            />
            <input
              value={form.username}
              onChange={handlechange}
              placeholder="👤 Username"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm shadow-sm"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative w-full md:w-fit flex-1">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handlechange}
                placeholder="🔐 Password"
                className="px-5 py-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-400 text-sm shadow-sm"
                type="password"
                name="password"
                id="password"
              />
              <img
                ref={ref}
                onClick={showPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 cursor-pointer"
                src="icons/eye.png"
                alt="Toggle Password"
              />
            </div>
          </div>

          <button
            onClick={savepassword}
            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition flex items-center gap-2 mx-auto"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: "24px", height: "24px" }}
            ></lord-icon>
            Save Password
          </button>
        </div>

        {/* PASSWORD TABLE */}
        <div className="mt-10 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Passwords
          </h2>

          {passwordArray.length === 0 ? (
            <p className="text-center text-gray-500">No passwords saved yet!</p>
          ) : (
            <table className="w-full text-sm border-separate border-spacing-y-3">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-2 px-4">Site</th>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Password</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, i) => (
                  <tr key={i} className="bg-white rounded-md shadow-sm">
                    <td className="py-2 px-4">
                      <div className="flex justify-between items-center">
                        <a
                          href={item.site}
                          className="text-blue-600 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                        <lord-icon
                          onClick={() => copyText(item.site)}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex justify-between items-center">
                        {item.username}
                        <lord-icon
                          onClick={() => copyText(item.username)}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex justify-between items-center">
                        {item.password}
                        <lord-icon
                          onClick={() => copyText(item.password)}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4 flex gap-2">
                      <lord-icon
                        onClick={() => editpassword(item.id)}
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{
                          width: "24px",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      />
                      <lord-icon
                        onClick={() => deletepassword(item.id)}
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{
                          width: "24px",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
