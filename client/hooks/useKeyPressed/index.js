import { useCallback, useEffect } from 'react';
import { bool, shape, string, func } from '~/types';

function useKeyPressed(targetKeysWithActions, ready) {
	const keyPressedHandler = useCallback(
		({ key, type }) => {
			targetKeysWithActions.forEach(item => {
				if (item.key === key) item.action({ key, type });
			});
		},
		[targetKeysWithActions]
	);

	useEffect(() => {
		if (ready) {
			window.addEventListener('keyup', keyPressedHandler);
			window.addEventListener('keydown', keyPressedHandler);
		}

		return () => {
			window.removeEventListener('keyup', keyPressedHandler);
			window.removeEventListener('keydown', keyPressedHandler);
		};
	}, [keyPressedHandler, ready]);

	return false;
}

useKeyPressed.propTypes = {
	targetKeysWithActions: shape({ key: string, actions: func }).isRequired,
	ready: bool
};

export default useKeyPressed;
