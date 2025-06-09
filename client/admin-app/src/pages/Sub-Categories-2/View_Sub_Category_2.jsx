import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from 'react-icons/fa';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';

export default function View_Sub_Category_2() {
  const [activeFilter, setActiveFilter] = useState(true);
  const [subsubcategory, setSubsubcategory] = useState([]);
  const [staticPath, setStaticPath] = useState('');
  const [ids, setIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(5);

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

  const getSubsubcategory = () => {
    axios
      .get(`${apiBaseUrl}subsubcategory/view`, {
        params: {
          categoryName,
          currentPage,
          limit,
        },
      })
      .then((res) => {
        // Debugging: Check response structure
        console.log('API response:', res.data);

        const finalRes = res.data;
        setSubsubcategory(finalRes.data || []);
        setStaticPath(finalRes.staticPath || '/uploads/subsubcategory/');
        setTotalPage(finalRes.pages || 1);
        setIds([]); // Reset selected ids on data load
      })
      .catch((err) => {
        console.error('Error fetching subsubcategory:', err);
      });
  };

  useEffect(() => {
    getSubsubcategory();
  }, [categoryName, currentPage, limit]);

  // Handle checkbox individual select/deselect
  const getAllCheckedvalue = (e) => {
    const value = e.target.value;
    if (e.target.checked && !ids.includes(value)) {
      setIds([...ids, value]);
    } else {
      setIds(ids.filter((id) => id !== value));
    }
  };

  // Handle select/deselect all checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = subsubcategory.map((item) => item._id);
      setIds(allIds);
    } else {
      setIds([]);
    }
    setSelectAll(e.target.checked);
  };

  // Sync selectAll state with ids
  useEffect(() => {
    setSelectAll(subsubcategory.length > 0 && ids.length === subsubcategory.length);
  }, [ids, subsubcategory]);

  // Delete multiple selected subsubcategories
  const deleteMultiple = () => {
    if (ids.length === 0) {
      alert('Please select at least one item to delete.');
      return;
    }
    if (!window.confirm('Are you sure you want to delete selected items?')) return;

    axios
      .post(`${apiBaseUrl}subsubcategory/delete`, { ids })
      .then(() => {
        getSubsubcategory();
        setIds([]);
      })
      .catch((err) => {
        console.error('Error deleting items:', err);
      });
  };

  // Change status of multiple selected subsubcategories
  const changeStatus = () => {
    if (ids.length === 0) {
      alert('Please select at least one item to change status.');
      return;
    }
    axios
      .post(`${apiBaseUrl}subsubcategory/change-status`, { ids })
      .then(() => {
        getSubsubcategory();
        setIds([]);
      })
      .catch((err) => {
        console.error('Error changing status:', err);
      });
  };

  return (
    <section className="w-full px-4 py-6">
      {!activeFilter && (
        <div className="mb-6 p-4 bg-white border rounded-lg shadow-sm max-w-xl">
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-2.5"
              placeholder="Search Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <button
              onClick={getSubsubcategory}
              className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800"
            >
              🔍
            </button>
          </form>
        </div>
      )}

      <div className="border rounded-lg shadow-sm">
        <div className="flex items-center justify-between bg-slate-100 px-6 py-4 border-b rounded-t-lg">
          <h2 className="text-2xl font-bold text-gray-900">View Sub Sub Category</h2>
          <div className="flex items-center gap-3">
            <select
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setCurrentPage(1); // reset to first page on limit change
              }}
              className="block w-44 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg"
              value={limit}
            >
              <option disabled value="">
                Select Items View
              </option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <button
              onClick={() => setActiveFilter(!activeFilter)}
              className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full"
              title="Toggle Filter"
              type="button"
            >
              <FaFilter />
            </button>
            <button
              onClick={changeStatus}
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              type="button"
            >
              Change Status
            </button>
            <button
              onClick={deleteMultiple}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-t">
              <tr>
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 font-semibold">Parent Category</th>
                <th className="px-6 py-3 font-semibold">Sub Category</th>
                <th className="px-6 py-3 font-semibold">Name</th>
                <th className="px-6 py-3 font-semibold">Image</th>
                <th className="px-6 py-3 font-semibold">Order</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {subsubcategory.length > 0 ? (
                subsubcategory.map((item) => (
                  <tr key={item._id} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm"
                        value={item._id}
                        checked={ids.includes(item._id)}
                        onChange={getAllCheckedvalue}
                      />
                    </td>
                    <td className="px-6 py-4">{item.parentCategory?.categoryName || '-'}</td>
                    <td className="px-6 py-4">{item.subcategory?.subcategoryName || '-'}</td>
                    <td className="px-6 py-4">{item.subsubcategoryName}</td>
                    <td className="px-6 py-4">
                      <img
                        src={staticPath + item.subsubcategoryImage}
                        alt="Sub Subcategory"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4">{item.subsubcategoryOrder}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block text-white text-sm font-semibold px-5 py-1.5 rounded-lg ${
                          item.subsubcategoryStatus ? 'bg-green-600' : 'bg-red-600'
                        }`}
                      >
                        {item.subsubcategoryStatus ? 'Active' : 'Deactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/edit-subsubcategory/${item._id}`}>
                        <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                          <FaPen className="text-white" />
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-700 font-semibold">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <ResponsivePagination current={currentPage} total={totalPage} onPageChange={setCurrentPage} />
        </div>
      </div>
    </section>
  );
}