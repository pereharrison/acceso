import { Pencil } from "lucide-react";
 
const avatars = [
  {
    id: 1,
    src: "https://i.pravatar.cc/40?img=11",
    alt: "User 1",
  },
  {
    id: 2,
    src: "https://i.pravatar.cc/40?img=5",
    alt: "User 2",
  },
];
 
const OVERFLOW_COUNT = 7;
 
function AvatarGroup({ users = avatars, overflow = OVERFLOW_COUNT, onEdit }) {
  return (
    <div className="flex items-center justify-between w-full max-w-xs px-1">
      {/* Avatar stack */}
      <div className="flex items-center">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="relative rounded-full ring-2 ring-white"
            style={{ marginLeft: index === 0 ? 0 : "-10px", zIndex: index }}
          >
            <img
              src={user.src}
              alt={user.alt}
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        ))}
 
        {/* Overflow badge */}
        {overflow > 0 && (
          <div
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-orange-400 text-white text-xs font-semibold ring-2 ring-white select-none"
            style={{ marginLeft: "-10px", zIndex: users.length }}
          >
            +{overflow}
          </div>
        )}
      </div>
 
      {/* Edit button */}
      <button
        onClick={onEdit}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 active:scale-95 transition-all text-gray-500 hover:text-gray-700"
        aria-label="Edit"
      >
        <Pencil size={15} strokeWidth={2} />
      </button>
    </div>
  );
}

export default AvatarGroup