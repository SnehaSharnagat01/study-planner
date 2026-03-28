import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const AddStudySessionForm = ({ setToggle }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
const { addSession, editData, updateSession } = useContext(SessionContext);


  const onSubmit = (data) => {
    if (editData) {
    updateSession({ ...data, id: editData.id }); 
  } else {
    addSession({ ...data, id: Date.now() });
  }

  reset();
  setToggle(true);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto px-6 py-4 bg-[#222] shadow-md rounded-lg">
      <h2 className="text-2xl font-medium mb-6 text-center text-white">Add Study Session</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white/80 mb-2">
          Topic Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('topicName', { required: 'Topic name is required' })}
          type="text"
          className={`w-full p-3 border rounded-lg bg-black text-white border-gray-600  ${errors.topicName ? 'border-red-500' : 'border-gray-600'
            }`}
        />
        {errors.topicName && <p className="mt-1 text-sm text-red-500">{errors.topicName.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white/80 mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          {...register('subject', { required: 'Subject is required' })}
          className="w-full p-3 border border-gray-600 bg-black text-white rounded-lg ">
          <option value="">Select Subject</option>
          <option value="Web Dev">Web Dev</option>
          <option value="DBMS">DBMS</option>
          <option value="OS">OS</option>
          <option value="DSA">DSA</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white/80 mb-2">
          Duration (minutes) <span className="text-red-500">*</span>
        </label>
        <input
          {...register('duration', {
            required: 'Duration is required',
            min: { value: 10, message: 'Minimum 10 minutes' },
            valueAsNumber: true
          })}
          type="number"
          className={`w-full p-3 border rounded-lg bg-black text-white  ${errors.duration ? 'border-red-500' : 'border-gray-600'
            }`}
        />
        {errors.duration && <p className="mt-1 text-sm text-red-500">{errors.duration.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white/80 mb-2">
          Priority <span className="text-red-500">*</span>
        </label>
        <select
          {...register('priority', { required: 'Priority is required' })}
          className="w-full p-3 border border-gray-600 bg-black text-white rounded-lg "
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && <p className="mt-1 text-sm text-red-500">{errors.priority.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-white/80 mb-2">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          {...register('date', { required: 'Date is required' })}
          type="date"
          className="w-full p-3 border border-gray-600 bg-black text-white rounded-lg "
        />
        {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200"
      >
        Add Study Session
      </button>
    </form>
  );
};

export default AddStudySessionForm;
