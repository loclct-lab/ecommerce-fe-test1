import logo from "../assets/logo";

export const shipping = [
    {
        id: 1,
        brand: "VNPost (Bưu điện Việt Nam)",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Miễn phí vận chuyển",
        image: "data:image/png;base64,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",
    },
    {
        id: 2,
        brand: "Giao Hàng Nhanh (GHN)",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Giá cước cạnh tranh",
        image: "data:image/jpeg;base64,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",
    },
    {
        id: 3,
        brand: "Giao Hàng Tiết Kiệm (GHTK)",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Giá cước tiết kiệm",
        image: "data:image/png;base64,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",
    },
    {
        id: 4,
        brand: "Viettel Post",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Dịch vụ uy tín",
        image: "data:image/png;base64,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",
    },
    {
        id: 5,
        brand: "J&T Express",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Giao hàng nhanh chóng",
        image: "data:image/png;base64,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",
    },
    {
        id: 6,
        brand: "Ninja Van",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Mạng lưới rộng khắp",
        image: "https://seeklogo.com/images/N/ninja-van-logo-DE7BA0B07C-seeklogo.com.png",
    },
    {
        id: 7,
        brand: "Kerry Express",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Dịch vụ cao cấp",
        image: "https://ke-website-prod.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/03/30112125/logo-2-100-1.jpg",
    },
    {
        id: 8,
        brand: "AhaMove",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Giao hàng theo yêu cầu",
        image: "https://home.ahamove.com/wp-content/uploads/2022/02/Thie%CC%82%CC%81t-ke%CC%82%CC%81-kho%CC%82ng-te%CC%82n-1-300x251.png", // Thay thế bằng URL hình ảnh thực
    },
    {
        id: 9,
        brand: "Lalamove",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Giao hàng linh hoạt",
        image: "https://seeklogo.com/images/L/lalamove-logo-AF143284AE-seeklogo.com.png", // Thay thế bằng URL hình ảnh thực
    },
    {
        id: 10,
        brand: "DHL Express",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: "",
        cost: "Free Shipping",
        image: logo.DHL,
    },
    {
        id: 11,
        brand: "FedEx",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: 45,
        cost: 25,
        image: logo.FedEx,
    },
    {
        id: 12,
        brand: "Express Expedition",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: 45,
        cost: 35,
        image: logo.Express,
    },
    {
        id: 13,
        brand: "JNE Express",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: 45,
        cost: 35,
        image: logo.JNE,
    },
    {
        id: 14,
        brand: "POS Indonesia",
        time_express: "Estimated delivery time: Jul 20 - Aug 03",
        old_cost: 45,
        cost: 35,
        image: logo.POS,
    },
];
