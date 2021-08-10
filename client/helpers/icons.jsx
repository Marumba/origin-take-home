import { ReactComponent as USD } from '~/assets/imgs/icons/icon-dollar-sign.svg';
import { ReactComponent as Home } from '~/assets/imgs/icons/icon-home.svg';
import { ReactComponent as ArrowLeft } from '~/assets/imgs/icons/icon-arrow-left.svg';

export const CurrencyIcons = {
	USD
};

export const Icons = { Home, ArrowLeft, ArrowRight: () => <ArrowLeft transform="rotate(180)" /> };
