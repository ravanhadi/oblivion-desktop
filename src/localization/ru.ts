import { Language } from './type';

const russian: Language = {
    global: {},
    status: {
        connecting: 'Подключение ...',
        connected: 'Подключено',
        connected_confirm: 'Подключено',
        disconnecting: 'Отключение ...',
        disconnected: 'Отключено',
        ip_check: 'Проверка IP ...'
    },
    home: {
        title_warp_based: 'На основе Warp',
        drawer_settings_warp: 'Настройки Warp',
        drawer_settings_routing_rules: 'Правила маршрутизации',
        drawer_settings_app: 'Настройки приложения',
        drawer_settings_scanner: 'Настройки сканера',
        drawer_settings_network: 'Настройки сети',
        drawer_log: 'Журнал приложений',
        drawer_update: 'Обновление',
        drawer_update_label: 'Новое обновление',
        drawer_speed_test: 'Тест скорости',
        drawer_about: 'О приложении',
        drawer_lang: 'Изменить язык'
    },
    toast: {
        ip_check_please_wait: 'Пожалуйста, подождите несколько секунд, чтобы повторить проверку!',
        ir_location:
            'Cloudflare подключился к IP с иранским местоположением, которое отличается от вашего фактического IP. Вы можете использовать его для обхода фильтрации, но не санкций. Не волнуйтесь! Вы можете изменить местоположение в настройках, используя опцию "Gool" или "psiphon".',
        btn_submit: 'Понятно',
        copied: 'Скопировано!',
        cleared: 'Журнал очищен!',
        please_wait: 'Пожалуйста, подождите ...',
        offline: 'Вы не подключены к интернету!',
        settings_changed: 'Применение настроек требует повторного подключения.'
    },
    settings: {
        title: 'Настройки Warp',
        more: 'Дополнительные настройки',
        method_warp: 'Warp',
        method_warp_desc: 'Включить Warp',
        method_gool: 'Gool',
        method_gool_desc: 'Включить WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Включить Psiphon',
        method_psiphon_location: 'Страна',
        method_psiphon_location_auto: 'Автоматически',
        method_psiphon_location_desc: 'Выберите желаемый IP-адрес страны',
        endpoint: 'Конечная точка',
        endpoint_desc: 'Комбинация IP-адреса или доменного имени вместе с портом',
        license: 'Лицензия',
        license_desc: 'Потребление лицензии удвоено',
        option: 'Настройки приложения',
        network: 'Настройки сети',
        proxy_mode: 'Конфигурация',
        proxy_mode_desc: 'Определение настроек прокси',
        port: 'Порт прокси',
        port_desc: 'Установите порт прокси для приложения',
        share_vpn: 'Поделиться (LAN)',
        share_vpn_desc: 'Поделиться прокси в сети',
        dns: 'Изменить DNS',
        dns_desc: 'Использовать общедоступный DNS Google',
        ip_data: 'Проверка IP',
        ip_data_desc: 'Отображение IP-адреса и местоположения после подключения',
        dark_mode: 'Темный режим',
        dark_mode_desc: 'Укажите режим отображения приложения',
        lang: 'Язык',
        lang_desc: 'Изменить язык интерфейса приложения',
        open_login: 'Начать при входе в систему',
        open_login_desc: 'Открывать при запуске системы',
        auto_connect: 'Автоматическое подключение',
        auto_connect_desc: 'Подключаться при открытии приложения',
        system_tray: 'Системный трей',
        system_tray_desc: 'Не размещать значок программы на панели задач',
        restore: 'Восстановить',
        restore_desc: 'Применить настройки приложения по умолчанию',
        scanner: 'Настройки сканера',
        scanner_alert:
            'Сканер активируется, если вы используете адрес конечной точки по умолчанию.',
        scanner_ip_type: 'Тип конечной точки',
        scanner_ip_type_auto: 'Автоматически',
        scanner_ip_type_desc: 'Чтобы найти IP конечной точки',
        scanner_rtt: 'Интервал',
        scanner_rtt_default: 'По умолчанию',
        scanner_rtt_desc: 'Ограничение RTT сканера',
        scanner_reserved: 'Зарезервировано',
        scanner_reserved_desc: 'Переопределить зарезервированное значение Wireguard',
        routing_rules: 'Черный список',
        routing_rules_desc: 'Предотвращать прохождение трафика через искажение',
        routing_rules_disabled: 'Отключено',
        routing_rules_items: 'Предметы'
    },
    tabs: {
        home: 'Связь',
        warp: 'Warp',
        network: 'Сеть',
        scanner: 'Сканер',
        app: 'заявка'
    },
    modal: {
        endpoint_title: 'Конечная точка',
        license_title: 'Лицензия',
        license_desc:
            'Для работы программы не обязательно наличие лицензии Warp, но если вы хотите, вы можете ввести свою лицензию здесь.',
        license_clear: 'Очистить',
        port_title: 'Порт прокси',
        restore_title: 'Восстановить изменения',
        restore_desc:
            'Подтверждая операцию восстановления изменений, все настройки программы вернутся к состоянию по умолчанию, и ваше подключение будет отключено.',
        routing_rules_sample: 'Пример',
        endpoint_default: 'По умолчанию',
        endpoint_suggested: 'предложено',
        endpoint_latest: 'Последний',
        confirm: 'Подтверждаю',
        update: 'Обновить',
        cancel: 'Отмена'
    },
    log: {
        title: 'Журнал приложений',
        desc: 'Если программа создает журнал, он будет отображаться здесь.',
        error_invalid_license: 'Введенная лицензия недействительна; Убери это.',
        error_too_many_connected: 'Лимит использования лицензии заполнен; Убери это.',
        error_access_denied: 'Запустите программу от имени администратора.',
        error_failed_set_endpoint:
            'Проверьте или замените значение конечной точки или повторите попытку.',
        error_warp_identity: 'Ошибка аутентификации в Cloudflare; Попробуйте еще раз.',
        error_script_failed: 'В программе произошла ошибка; Попробуйте еще раз.',
        error_object_null: 'В программе произошла ошибка; Попробуйте еще раз.',
        error_port_already_in_use: (value) =>
            `Порт ${value} используется другой программой; Измени это.`,
        error_port_socket: 'Использовать другой порт.',
        error_unknown_flag: 'В фоновом режиме была выполнена недопустимая команда.',
        error_deadline_exceeded: 'Время ожидания соединения истекло; Попробуйте еще раз.',
        error_configuration_encountered: 'В конфигурации прокси произошла ошибка!',
        error_desktop_not_supported: 'Среда рабочего стола не поддерживается!',
        error_configuration_not_supported:
            'Конфигурация прокси-сервера не поддерживается в вашей операционной системе, но вы можете использовать Warp Proxy вручную.',
        error_configuring_proxy: (value) => `Ошибка настройки прокси-сервера для ${value}!`,
        error_wp_not_found: 'Файл warp-plus не находится рядом с пакетом приложения.'
    },
    about: {
        title: 'О приложении',
        desc: 'Эта программа является неофициальной, но надежной версией приложения Oblivion для Windows, Linux и Mac.\nПрограмма Oblivion Desktop создана по образу и подобию пользовательского интерфейса оригинальной версии, разработанной Yousef Ghobadi. Она была написана с целью обеспечить свободный доступ в Интернет, и любое изменение имени или коммерческое использование запрещено.',
        slogan: 'Интернет, для всех или никого!'
    },
    systemTray: {
        connect: 'Подключиться',
        connecting: 'Подключение ...',
        connected: 'Подключено',
        disconnecting: 'Отключение ...',
        settings: 'Настройки',
        settings_warp: 'Warp',
        settings_network: 'Сеть',
        settings_scanner: 'Сканер',
        settings_app: 'Приложение',
        about: 'О программе',
        log: 'Журнал',
        exit: 'Выход'
    },
    update: {
        available: 'Доступно обновление',
        available_message: (value) => `Доступна новая версия ${value}. Хотите обновить сейчас?`,
        ready: 'Обновление готово',
        ready_message: (value) =>
            `Новая версия ${value} готова. Она будет установлена после перезагрузки. Хотите перезагрузить сейчас?`
    }
};
export default russian;
