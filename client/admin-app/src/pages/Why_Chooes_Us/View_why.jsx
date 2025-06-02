import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from "react-icons/fa";
import axios from 'axios';

export default function View_why() {
  const [whyData, setWhyData] = useState([]);
  const [staticPath, setStaticPath] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [ids, setIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const getwhyChoose = () => {
    axios.get(`${apiBaseUrl}whychoose/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setWhyData(finalRes.data);
        setStaticPath(finalRes.staticPath);
      });
  };

  useEffect(() => {
    getwhyChoose();
  }, []);

  // Sync selectAll with ids and whyData
  useEffect(() => {
    if (whyData.length > 0 && ids.length === whyData.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [ids, whyData]);

  const handleCheckAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allIds = whyData.map((item) => item._id);
      setIds(allIds);
    } else {
      setIds([]);
    }
  };

  const handleCheckSingle = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setIds((prev) => [...prev, value]);
    } else {
      setIds((prev) => prev.filter((id) => id !== value));
      // setSelectAll(false); // No need, handled by useEffect
    }
  };

  const handleDelete = async () => {
    if (ids.length === 0) return;
    try {
      await axios.post(`${apiBaseUrl}whychoose/delete`, { ids });
      getwhyChoose();
      setIds([]);
      setSelectAll(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeStatus = async () => {
    if (ids.length === 0) return;
    try {
      await axios.post(`${apiBaseUrl}whychoose/change-status`, { ids });
      getwhyChoose();
      setIds([]);
      setSelectAll(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className='w-full'>
        <div className='border-b-2 text-gray-300'></div>
        <div className='py-3'>
          <nav className='mt-1'>
            <ul className='flex items-center'>
              <li><Link to='/dashboard'><span className='font-bold text-gray-800'>Home</span></Link></li>&nbsp;
              <li><Link to='/user'><span className='font-bold text-gray-800'>/&nbsp;Why Choose Us</span></Link></li>
              <li><span className='font-bold text-gray-800'>/&nbsp;View</span></li>
            </ul>
          </nav>
        </div>
        <div className='border-b-2 text-gray-300'></div>
        <div className='w-full min-h-[620px]'>
          <div className='max-w-[1220px] mx-auto py-5'>

            {/* Header */}
            <div className='flex items-center justify-between bg-slate-100 py-3 px-4 border rounded-t-md border-slate-400'>
              <h3 className='text-[26px] font-semibold'>View Why Choose Us</h3>
              <div className='flex'>
                <div
                  className='cursor-pointer text-white w-[40px] h-[40px] rounded-lg bg-blue-700 hover:bg-blue-900 mx-3'
                  onClick={toggleSearch}
                >
                  <FaFilter className='text-white my-3 mx-2.5' />
                </div>
                <button onClick={handleChangeStatus} className='text-white font-medium px-4 bg-green-700 rounded-lg hover:bg-green-900'>
                  Change Status
                </button>
                <button onClick={handleDelete} className='text-white font-medium px-4 mx-4 bg-red-700 rounded-lg hover:bg-red-900'>
                  Delete
                </button>
              </div>
            </div>

            {showSearch && (
              <div className="my-4 p-4 bg-white border rounded-lg shadow-sm max-w-md">
                <form className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-2.5"
                    placeholder="Search Name"
                  />
                  <button
                    type="submit"
                    className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800"
                  >
                    🔍
                  </button>
                </form>
              </div>
            )}

            {/* Table */}
            <div className='border border-slate-400 border-t-0 rounded-b-md overflow-x-auto'>
              <table className='w-full text-gray-500'>
                <thead className='text-gray-900 text-[12px] uppercase bg-gray-50'>
                  <tr>
                    <th><input type='checkbox' className='w-4 h-4' checked={selectAll} onChange={handleCheckAll} /></th>
                    <th className='px-6 py-3'>Title</th>
                    <th className='px-6 py-3'>Image</th>
                    <th className='px-6 py-3'>Description</th>
                    <th className='px-6 py-3'>Order No</th>
                    <th className='px-6 py-3'>Status</th>
                    <th className='px-6 py-3'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {whyData.map((item) => (
                    <tr key={item._id} className='bg-white hover:bg-gray-50'>
                      <td className='p-4'>
                        <input
                          onChange={handleCheckSingle}
                          checked={ids.includes(item._id)}
                          value={item._id}
                          type='checkbox'
                          className='w-4 h-4'
                        />
                      </td>
                      <td className='px-6 py-4'>{item.whychooseTitle}</td>
                      <td className='px-6 py-4'>
                        <img
                          src={`${staticPath}${item.whychooseImage}`}
                          alt="Why Choose"
                          className='w-10 h-10 rounded-full'
                        />
                      </td>
                      <td className='px-6 py-4'>{item.whychooseDescription}</td>
                      <td className='px-6 py-4'>{item.whychooseOrder}</td>
                      <td className='px-6 py-4'>
                        <button className={`text-white font-medium px-5 py-2 rounded-lg ${item.whychooseStatus ? 'bg-green-700 hover:bg-green-900' : 'bg-red-700 hover:bg-red-900'}`}>
                          {item.whychooseStatus ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className='px-6 py-4'>
                        <Link to={`/edit-why/${item._id}`}>
                          <div className='w-[40px] flex items-center justify-center h-[40px] rounded-full bg-blue-700 hover:bg-blue-800'>
                            <FaPen className='text-white' />
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {whyData.length === 0 && (
                    <tr>
                      <td colSpan="7" className='text-center py-4 text-gray-600'>No data available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}