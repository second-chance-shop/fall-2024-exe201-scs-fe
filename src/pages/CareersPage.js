import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
    const [selectedJobIndex, setSelectedJobIndex] = useState(0); // State to track the selected job

    const handleJobSelect = (index) => {
        setSelectedJobIndex(index); // Update the selected job index
    };
    // Placeholder job data (to be filled later)
    const jobs = [
        {
            title: "Designer Cho SCS - Kẻ Vẽ Nên Cơ Hội ",
            type: "Part-time",
            location: "Thành phố Hồ Chí Minh",
            description:
                "Bạn là người nhìn thấy vẻ đẹp trong những điều tưởng chừng vô nghĩa? Second Chance Shop cần bạn - một người có thể biến ý tưởng thành hình ảnh, biến những sản phẩm cũ thành câu chuyện mới. Công việc của bạn là thổi hồn sáng tạo vào từng thiết kế, truyền tải thông điệp về sự bền vững và giá trị của cơ hội thứ hai.",
            responsibilities: [
                "Tạo và phát triển bộ nhận diện hình ảnh của Second Chance Shop.",
                "Thiết kế các ấn phẩm truyền thông: banner, bài đăng mạng xã hội, và các tài liệu quảng cáo.",
                "Phối hợp với đội nhóm để hiện thực hóa các ý tưởng truyền thông thành sản phẩm trực quan, thu hút.",
                "Đề xuất các ý tưởng thiết kế sáng tạo, đột phá để nâng tầm thương hiệu.",
                "Tham gia thiết kế giao diện (UI) nhằm tối ưu trải nghiệm người dùng (UX).",
            ],
            requiredSkills: [
                "Thành thạo các công cụ thiết kế: Photoshop, Illustrator, hoặc Figma.",
                "Óc sáng tạo độc đáo và khả năng kể chuyện qua hình ảnh.",
                "Hiểu biết cơ bản về UI/UX là điểm cộng.",
                "Kỹ năng quản lý thời gian, làm việc nhóm tốt.",
                "Tinh thần cầu tiến, luôn học hỏi và đổi mới.",
            ],
            qualifications: [
                "Có portfolio thể hiện sự sáng tạo, phong cách riêng.",
                "Đam mê với thiết kế và ý tưởng bền vững.",
                "Khả năng làm việc độc lập và đảm bảo deadline.",
                "Ưu tiên các ứng viên có kinh nghiệm thiết kế trong môi trường startup hoặc dự án cộng đồng.",
            ],
        },
        {
            title: "Lập Trình Viên Backend - Người Giải Mã Hậu Trường",
            type: "Part-time",
            location: "Thành phố Hồ Chí Minh",
            description:
                "Nếu bạn là người thích đứng sau sân khấu để xây dựng nên những hệ thống mạnh mẽ, đảm bảo mọi thứ vận hành mượt mà, thì vị trí này là dành cho bạn. Second Chance Shop đang tìm kiếm một lập trình viên backend Java với khả năng thiết kế và triển khai những giải pháp công nghệ bền vững, giúp kết nối cộng đồng và tạo nên những giá trị mới từ những điều cũ. Đây là cơ hội để bạn thử thách và nâng tầm kỹ năng của mình trong một môi trường startup đầy cảm hứng.",
            responsibilities: [
                "Xây dựng và phát triển API cho các tính năng của nền tảng Second Chance Shop.",
                "Thiết kế cơ sở dữ liệu, tối ưu hóa truy vấn để đảm bảo hiệu suất và khả năng mở rộng.",
                "Đảm bảo các tính năng backend hoạt động ổn định, bảo mật và hiệu quả.",
                "Tích hợp các dịch vụ bên thứ ba (thanh toán, giao hàng) vào hệ thống.",
                "Phối hợp với đội frontend để đảm bảo sự liền mạch trong trải nghiệm người dùng.",
                "Giám sát, sửa lỗi, và nâng cấp hệ thống định kỳ.",
            ],
            requiredSkills: [
                "Thành thạo Java và các framework như Spring Boot hoặc Hibernate.",
                "Kinh nghiệm làm việc với cơ sở dữ liệu (MySQL, PostgreSQL, hoặc tương tự).",
                "Hiểu biết về RESTful API và kiến trúc microservices.",
                "Kỹ năng debug, xử lý sự cố và tối ưu hiệu suất hệ thống.",
                "Khả năng sử dụng Git để quản lý phiên bản mã nguồn.",
                "Kiến thức về bảo mật ứng dụng và dữ liệu là một lợi thế.",
            ],
            qualifications: [
                "Có kinh nghiệm phát triển backend với Java từ 6 tháng đến 1 năm (hoặc dự án cá nhân/ học thuật tương đương).",
                "Hiểu biết về quy trình phát triển phần mềm và môi trường làm việc Agile.",
                "Đam mê học hỏi và giải quyết các vấn đề công nghệ phức tạp.",
                "Tinh thần trách nhiệm cao, khả năng làm việc độc lập và hợp tác nhóm hiệu quả.",
                "Ưu tiên ứng viên đã từng làm việc trong các dự án startup hoặc nền tảng thương mại điện tử.",
            ],
        },
        {
            title: "Marketing Cho SCS - Chiến Lược Gia Cơ Hội ",
            type: "Part-time",
            location: "Thành phố Hồ Chí Minh",
            description:
                "Second Chance Shop không chỉ là nơi trao đổi hàng hóa, mà còn là nơi lan tỏa giá trị sống bền vững. Chúng tôi cần một Marketing chiến lược, người có thể biến những câu chuyện từ sản phẩm thành sức mạnh kết nối cộng đồng. Nếu bạn đam mê sáng tạo, thích thử nghiệm những chiến dịch độc đáo và muốn góp phần định hình tương lai tiêu dùng bền vững, đây chính là cơ hội của bạn.",
            responsibilities: [
                "Xây dựng và thực hiện các chiến dịch truyền thông sáng tạo để thu hút người dùng.",
                "Phát triển nội dung và chiến lược quảng bá trên các nền tảng mạng xã hội như Facebook, Instagram, và TikTok.",
                "Tạo các câu chuyện thương hiệu để truyền tải ý nghĩa và giá trị của Second Chance Shop.",
                "Hợp tác chặt chẽ với Designer để đảm bảo nội dung hình ảnh và thông điệp đồng nhất.",
                "Đo lường và phân tích hiệu quả của các chiến dịch, đề xuất giải pháp cải thiện.",
            ],
            requiredSkills: [
                "Kỹ năng viết nội dung sáng tạo, bắt trend và truyền cảm hứng.",
                "Hiểu biết về các công cụ quản lý mạng xã hội như Meta Business Suite, Buffer hoặc tương tự.",
                "Khả năng sử dụng công cụ phân tích dữ liệu (Google Analytics, Meta Insights).",
                "Kỹ năng làm việc nhóm và quản lý thời gian tốt.",
                "Tinh thần học hỏi và luôn đổi mới trong cách tiếp cận marketing.",
            ],
            qualifications: [
                "Có kinh nghiệm hoặc đam mê trong lĩnh vực marketing, truyền thông.",
                "Hiểu biết cơ bản về tiêu dùng bền vững và thương mại điện tử.",
                "Có khả năng lên kế hoạch và thực hiện các chiến dịch quảng bá.",
                "Portfolio hoặc minh chứng các dự án từng tham gia là một lợi thế.",
            ],
        },
    ];

    // Animation Madness
    const fadeInOut = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring", stiffness: 50 },
        },
    };

    const crazyBounce = {
        hidden: { scale: 0.9, rotate: 0 },
        visible: {
            scale: [0.9, 1.05, 1],
            rotate: [0, 15, -15, 0],
            transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
        },
    };

    const hoverPulse = {
        rest: { scale: 1 },
        hover: {
            scale: 1.2,
            textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
            transition: { duration: 0.3 },
        },
    };

    const buttonHoverEffect = {
        rest: { scale: 1, backgroundColor: "rgba(249,115,22,1)" },
        hover: {
            scale: 1.1,
            backgroundColor: "rgba(234,88,12,1)",
            boxShadow: "0px 10px 30px rgba(234,88,12,0.8)",
            transition: { duration: 0.4 },
        },
    };

    return (
        <div className="bg-gradient-to-tr from-green-50 via-green-100 to-white min-h-screen py-12">
            {/* Enlarged Hero Container */}
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <motion.div
                    className="bg-gradient-to-br from-green-500 to-green-700 p-10 rounded-3xl shadow-2xl text-center text-white mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInOut}
                >
                    <motion.h1
                        className="text-6xl font-extrabold mb-4"
                        variants={hoverPulse}
                        initial="rest"
                        whileHover="hover"
                    >
                        SCS Đang Tìm Tài Năng
                    </motion.h1>
                    <p className="text-xl italic">Giới hạn chỉ nằm ở suy nghĩ</p>
                </motion.div>

                <div className="flex">
                    {/* Sidebar Navigation */}
                    <aside className="w-1/3 bg-white rounded-3xl shadow-lg p-6">
                        <motion.h2
                            className="text-2xl font-bold text-gray-800 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            Job Categories
                        </motion.h2>
                        <ul className="space-y-4">
                            {jobs.map((job, index) => (
                                <motion.li
                                    key={index}
                                    className={`cursor-pointer p-4 rounded-lg ${
                                        selectedJobIndex === index
                                            ? "bg-green-600 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => handleJobSelect(index)}
                                >
                                    {job.title || "Job Title"}
                                </motion.li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <motion.main
                        key={selectedJobIndex} // Add key based on selectedJobIndex
                        className="w-2/3 ml-6 bg-white rounded-3xl shadow-xl p-10"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInOut}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Job Header */}
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-green-700">
                                {jobs[selectedJobIndex]?.title || "Job Title Here"}
                            </h2>
                            <p className="text-lg text-gray-500 mt-2">
                                {jobs[selectedJobIndex]?.type || "Full-time"} ·{" "}
                                {jobs[selectedJobIndex]?.location || "Location Details"}
                            </p>
                            <motion.p
                                className="text-xl text-gray-700 mt-6"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInOut}
                                transition={{ delay: 0.5 }}
                            >
                                {jobs[selectedJobIndex]?.description ||
                                    "Job description will be here."}
                            </motion.p>
                        </div>

                        {/* Responsibilities Section */}
                        <motion.section
                            className="mb-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInOut}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Responsibilities
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-3">
                                {jobs[selectedJobIndex]?.responsibilities?.length > 0
                                    ? jobs[selectedJobIndex].responsibilities.map((item, index) => (
                                          <li key={index}>{item}</li>
                                      ))
                                    : "Responsibilities will be listed here."}
                            </ul>
                        </motion.section>

                        {/* Required Skills Section */}
                        <motion.section
                            className="mb-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInOut}
                            transition={{ delay: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Required Skills
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-3">
                                {jobs[selectedJobIndex]?.requiredSkills?.length > 0
                                    ? jobs[selectedJobIndex].requiredSkills.map((item, index) => (
                                          <li key={index}>{item}</li>
                                      ))
                                    : "Required skills will be listed here."}
                            </ul>
                        </motion.section>

                        {/* Minimum Qualifications Section */}
                        <motion.section
                            className="mb-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInOut}
                            transition={{ delay: 1 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Minimum Qualifications
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-3">
                                {jobs[selectedJobIndex]?.qualifications?.length > 0
                                    ? jobs[selectedJobIndex].qualifications.map((item, index) => (
                                          <li key={index}>{item}</li>
                                      ))
                                    : "Qualifications will be listed here."}
                            </ul>
                        </motion.section>

                        {/* Apply Button */}
                        <motion.div
                            className="text-center mt-8"
                            initial="hidden"
                            animate="visible"
                            variants={crazyBounce}
                        >
                            <motion.button
                                className="py-3 px-8 rounded-lg font-bold text-white"
                                variants={buttonHoverEffect}
                                initial="rest"
                                whileHover="hover"
                            >
                                Apply Now
                            </motion.button>
                        </motion.div>
                    </motion.main>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
