/**
 * Sakura 特效模块
 * 管理樱花飘落特效的初始化
 */

import type { SakuraConfig } from "../../types/config";
import { initSakura } from "../../utils/sakura-manager";

/**
 * Sakura 特效处理器类
 * 负责樱花飘落特效的初始化和状态管理
 */
export class SakuraEffectHandler {
	private initialized = false;
	private config: SakuraConfig | null = null;

	/**
	 * 初始化 Sakura 特效
	 */
	async init(widgetConfigs: any): Promise<void> {
		const sakuraConfig = widgetConfigs?.sakura;
		if (!sakuraConfig || !sakuraConfig.enable) {
			return;
		}

		// 避免重复初始化
		if ((window as any).sakuraInitialized) {
			return;
		}

		this.config = sakuraConfig;
		await initSakura(sakuraConfig);
		this.initialized = true;
		(window as any).sakuraInitialized = true;
	}

	/**
	 * 检查是否已初始化
	 */
	isInitialized(): boolean {
		return this.initialized;
	}

	/**
	 * 获取配置
	 */
	getConfig(): SakuraConfig | null {
		return this.config;
	}
}

// 创建全局实例
let globalSakuraEffectHandler: SakuraEffectHandler | null = null;

/**
 * 获取全局 Sakura 特效处理器实例
 */
export function getSakuraEffectHandler(): SakuraEffectHandler {
	if (!globalSakuraEffectHandler) {
		globalSakuraEffectHandler = new SakuraEffectHandler();
	}
	return globalSakuraEffectHandler;
}

/**
 * 初始化 Sakura 特效（便捷函数）
 */
export function setupSakura(widgetConfigs: any): void {
	const handler = getSakuraEffectHandler();
	void handler.init(widgetConfigs).catch((error) => {
		console.error("Failed to initialize Sakura effect:", error);
	});
}

/**
 * 设置 Sakura 特效初始化的 DOM 监听
 */
export function setupSakuraOnDOMReady(widgetConfigs: any): void {
	const handler = getSakuraEffectHandler();

	const init = () => {
		handler.init(widgetConfigs);
	};

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
}
