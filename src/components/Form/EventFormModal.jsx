import React, { useState } from 'react';

const EventFormModal = ({ open, onClose, onSave, onDelete, initialData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  React.useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setStart(initialData.start ? initialData.start.toISOString().slice(0, 16) : ''); // Format as 'YYYY-MM-DDTHH:MM'
      setEnd(initialData.end ? initialData.end.toISOString().slice(0, 16) : ''); // Format as 'YYYY-MM-DDTHH:MM'
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && start && end) {
      onSave({ title, description, start: new Date(start), end: new Date(end) });
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {initialData?.title ? 'Edit Event' : 'Create New Event'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date:</label>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date:</label>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Delete button */}
        {/* {initialData?.title && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => onDelete(initialData.start, initialData.end)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete Event
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default EventFormModal;

