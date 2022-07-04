import { useRouter as nextRouter } from 'next/router'
import { i18n } from 'next-i18next'

const TopLang = () => {

    const router = nextRouter()

    const onLangChange = (ev) => {
        i18n.changeLanguage(ev.target.value)
        router.replace("/", ev.target.value, { locale: ev.target.value })
    }

    return (
        <div className="bg-zinc-900 py-1 px-2 drop-shadow-sm bg-cover bg-fixed" style={{ backgroundImage: "url(/images/background/top_head.png)" }}>
            <div className="sm:container md:container lg:container mx-auto">
                <div className="flex justify-between">
                    <div className="flex-none">
                        <p className="text-white">
                            WYNNCLUB888
                        </p>
                    </div>
                    <div>
                        <select className="border-0 text-zinc-400 rounded-md bg-transparent" onChange={onLangChange} value={router.locale}>
                            <option value="th">
                                ภาษาไทย
                            </option>
                            <option value="en">
                                English
                            </option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopLang