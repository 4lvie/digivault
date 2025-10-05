import { useState } from "react";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

function ProfileForm({ initialData, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    surname: initialData.surname || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    avatar_url: initialData.avatar_url || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Edit Profile</h3>
        <Avatar src={form.avatar_url} alt={form.name || "Profile photo"} size="xl" className="mb-4" />
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className="input input-bordered w-full"
            value={form.surname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="input input-bordered w-full"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="url"
            name="avatar_url"
            placeholder="Avatar URL"
            className="input input-bordered w-full"
            value={form.avatar_url}
            onChange={handleChange}
          />
          <div className="flex gap-4 mt-4">
            <Button type="submit" variant="primary" className="flex-1">Save</Button>
            <Button type="button" onClick={onClose} className="flex-none">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;