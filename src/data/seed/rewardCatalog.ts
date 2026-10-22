import type { DecorationCatalogItem } from '../../domain/types';

export const EXTRA_REWARDS: DecorationCatalogItem[] = [
  { itemId: 'fountain', name: 'Đài phun nước', description: 'Điểm nhấn lớn cho quảng trường nhỏ trên đảo.', price: 50, icon: '⛲', category: 'building' },
  { itemId: 'greenhouse', name: 'Nhà kính mùa xuân', description: 'Một khu vườn riêng thật nhiều màu xanh.', price: 80, icon: '🏡', category: 'building' },
  { itemId: 'castle', name: 'Lâu đài của em', description: 'Công trình đặc biệt dành cho hành trình học bền bỉ.', price: 200, icon: '🏰', category: 'building' },
  { itemId: 'ferris-wheel', name: 'Vòng quay bên biển', description: 'Biến góc đảo thành khu vui chơi nhỏ.', price: 150, icon: '🎡', category: 'building' },
  { itemId: 'cherry-garden', name: 'Vườn anh đào', description: 'Một khu vườn hồng cho góc hẹn hò.', price: 60, icon: '🌸', category: 'nature' },
  { itemId: 'picnic-set', name: 'Bữa picnic nhỏ', description: 'Góc nghỉ chân sau một buổi học.', price: 20, icon: '🧺', category: 'furniture' },
  { itemId: 'swan', name: 'Thiên nga hồ ngọc', description: 'Một người bạn nhỏ cho khu hồ nước.', price: 25, icon: '🦢', category: 'nature' },
  { itemId: 'piano', name: 'Piano ngoài trời', description: 'Góc nhạc yên bình bên biển.', price: 50, icon: '🎹', category: 'furniture' },
  { itemId: 'milk-tea', name: 'Một ly trà sữa', description: 'Vé mời anh một ly trà sữa em chọn. Hai bạn thống nhất quán và thời gian nhé.', price: 15, icon: '🧋', category: 'voucher' },
  { itemId: 'snack-date', name: 'Hẹn đi ăn vặt', description: 'Em chọn món, anh đi cùng. Hai bạn sắp xếp buổi hẹn với nhau.', price: 25, icon: '🍟', category: 'voucher' },
  { itemId: 'movie-date', name: 'Một buổi xem phim', description: 'Đổi lấy một buổi xem phim cùng nhau, em chọn phim.', price: 40, icon: '🎬', category: 'voucher' },
  { itemId: 'dinner-date', name: 'Bữa tối em chọn', description: 'Phần thưởng lớn: một bữa tối cùng người thương.', price: 60, icon: '🍽️', category: 'voucher' },
  { itemId: 'choose-date', name: 'Một ngày em làm chủ', description: 'Em lên lịch một ngày hẹn hò; hai bạn cùng thống nhất kế hoạch.', price: 100, icon: '👑', category: 'voucher' },
  { itemId: 'hug', name: 'Một cái ôm thật lâu', description: 'Một lời hẹn ôm từ người đồng hành, không hết hạn.', price: 5, icon: '🤗', category: 'voucher' },
  { itemId: 'hint-ticket', name: 'Vé trợ giúp học tập', description: 'Dùng một lần để loại một đáp án sai trong chế độ Luyện tập. Không áp dụng khi thi thử.', price: 5, icon: '💡', category: 'perk' },
];
