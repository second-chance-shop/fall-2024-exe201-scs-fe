import React from "react";

const UploadProduct = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Left Sidebar */}

            {/* Right Content Area */}
            <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 p-6 mx-auto lg:ml-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Thêm sản phẩm</h1>

                <form encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên sản phẩm
                        </label>
                        <input
                            type="text"
                            name="productName"
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Số lượng
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mô tả
                        </label>
                        <textarea
                            name="description"
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Danh mục
                        </label>
                        <select
                            name="categoryId"
                            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            required
                        >
                            <option value="">Chọn danh mục</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
                        <input
                            type="number"
                            name="prices"
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Hình ảnh sản phẩm
                        </label>
                        <input
                            type="file"
                            name="file"
                            accept="image/*"
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-md"
                    >
                        Tạo
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UploadProduct;
