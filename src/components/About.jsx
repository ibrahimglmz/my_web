import { motion } from 'framer-motion'
import { useState } from 'react'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const firstPart = `İstanbul Kent Üniversitesi Bilgisayar Programcılığı bölümünden mezun bir yazılım geliştirici olarak, veri işleme ve analiz süreçlerinden, web teknolojilerine kadar geniş bir teknik yetkinliğe sahibim. Python programlama dili ile veri çıkarma, analiz, modelleme ve segmentasyon konularında aktif projeler yürüttüm. Numpy ve Pandas gibi güçlü kütüphaneleri kullanarak veriye dayalı çözümler geliştirmekteyim. Ayrıca, SQL, Docker ve Git gibi teknolojilerle yazılım geliştirme süreçlerini profesyonel bir şekilde yönetebiliyorum.`

  const remainingPart = `
        Medya işleme alanında Mediapipe ve OpenCV teknolojileriyle uygulamalar geliştirdim. HTML, CSS ve React bilgimle kullanıcı dostu arayüzler tasarlayarak tam kapsamlı çözümler sunuyorum. Hem bireysel projelerimde hem de çeşitli staj ve gönüllü çalışmalarımda edindiğim tecrübeler sayesinde yazılım geliştirme süreçlerinde analitik düşünme, problem çözme ve ekip çalışması yeteneklerimi pekiştirdim.

        Freelance yazılım geliştirici olarak sürdürdüğüm çalışmalarımda, modern teknolojilerle müşteri ihtiyaçlarına özel yazılım çözümleri üretiyor, aktif olarak üretkenliği ve yeniliği merkezime alıyorum. Üretken Akademi online staj programı ve New Mind firmasında kazandığım kurumsal deneyimler sayesinde yazılım ve bilgi sistemleri alanlarında pratik bilgi birikimi sağladım. Ayrıca, üniversite hayatım boyunca Google Developer Student Clubs (GDSC) çatısı altında liderlik görevleri üstlenerek teknoloji topluluklarında aktif rol aldım.

        Yönetim bilişim sistemleri, IT veya yazılım departmanlarında edindiğim bilgi ve becerilerle kurumunuza değer katmayı, yenilikçi ve sürdürülebilir çözümler üretmeyi hedefliyorum.`

  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Hakkımda</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p>
          {firstPart}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <p>{remainingPart}</p>
        </motion.div>

        <motion.button
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "linear-gradient(to right, var(--secondary-color), #00b894)",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
            marginTop: "20px",
            fontSize: "1rem",
            fontWeight: "500",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          {isExpanded ? "Daha Az Göster" : "Devamını Oku"}
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default About 