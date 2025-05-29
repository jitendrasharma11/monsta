import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Add_Material() {

    let { id } = useParams()
    console.log(id)

    let navigate = useNavigate()

    let [formValue, setFormValue] = useState(

        {
            materialName: '',
            materialOrder: ''
        }

    )

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let materialSave = (event) => {
        event.preventDefault()
        // let obj = {
        //     materialName: event.target.materialName.value,
        //     materialOrder: event.target.materialOrder.value
        // }
        if (id) {
            axios.put(`${apiBaseUrl}material/update/${id}`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setFormValue({ materialName: '', materialOrder: '' })
                        setTimeout(() => {
                            navigate('/view-material')
                        }, 2000)

                    }
                    else {
                        toast.error(finalRes.msg)
                    }

                })
        }
        else {
            axios.post(`${apiBaseUrl}material/insert`, formValue)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.msg)
                        setFormValue({ materialName: '', materialOrder: '' })
                        setTimeout(() => {
                            navigate('/view-material')
                        }, 2000)

                    }
                    else {
                        toast.error(finalRes.msg)
                    }

                })
        }

    }
    useEffect(() => {
        setFormValue({
            materialName: '',
            materialOrder: ''
        })
        if (id) {
            axios.get(`${apiBaseUrl}material/edit-row-data/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    console.log(finalRes.data)
                    setFormValue({
                        materialName: finalRes.data.materialName,
                        materialOrder: finalRes.data.materialOrder
                    })

                })

        }
    }, [id])
    return (
        <div>
            <ToastContainer />
            <section className="w-full px-3">
                <div className="border-b-2 text-gray-300"></div>
                <div className="py-3">
                    <nav className="mt-1">
                        <ul className="flex items-center">
                            <li key="home">
                                <Link to="/dashboard">
                                    <span className="font-bold text-gray-800">Home</span>
                                </Link>
                            </li>
                            <li key="separator-1">&nbsp;</li>
                            <li key="material">
                                <Link to="/add-material">
                                    <span className="font-bold text-gray-800">/&nbsp;Material</span>
                                </Link>
                            </li>
                            <li key="add">
                                <span className="font-bold text-gray-800">/&nbsp;Add</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="border-b-2 text-gray-300"></div>
                <div className="w-full min-h-[620px]">
                    <div className="max-w-[1220px] mx-auto py-5">
                        <h3 className="text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200">
                            Add Material
                        </h3>
                        <form onSubmit={materialSave} className="py-3 px-2 border border-t-0 rounded-b-md border-slate-400" autoComplete="off">
                            <div className="mb-5 p-1">
                                <label htmlFor="cname" className="p-1 block font-medium text-gray-900">
                                    Material Name
                                </label>
                                <input
                                    onChange={(e) => {
                                        let obj = { ...formValue }
                                        obj["materialName"] = e.target.value
                                        setFormValue(obj)
                                    }
                                    }
                                    value={formValue.materialName}
                                    type="text"
                                    name="materialName"
                                    className="text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500"
                                    placeholder="Material Name"
                                />
                            </div>

                            <div className="mb-5 p-1">
                                <label htmlFor="corder" className="p-1 block font-medium text-gray-900">
                                    Order
                                </label>
                                <input
                                    onChange={(e) => {
                                        let obj = { ...formValue }
                                        obj["materialOrder"] = e.target.value
                                        setFormValue(obj)
                                    }
                                    }
                                    value={formValue.materialOrder}
                                    type="number"
                                    name="materialOrder"
                                    id="corder"
                                    className="text-[20px] border-2 py-2.5 px-2 block shadow-md border-gray-400 w-full rounded-lg focus:border-blue-500"
                                    placeholder="Order"
                                />
                            </div>

                            <button
                                type="submit"
                                className="text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 mx-1.5 transition-colors duration-200"
                            >
                                {id ? "Update" : "Add"} Material
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}