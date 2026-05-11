import PageIntro from "../shared/PageIntro"

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="O nás"
      title="Výuka, která se přizpůsobí vám"
      note="Teorie i praktické jízdy"
    >
      <div className="two-column-text">
        <p>
          Jako v každé autoškole, naše výuka sestává z praktických jízd a hodin
          teorie. Praktický výcvik probíhá od ranních hodin až po večer, včetně
          víkendů.
        </p>
        <p>
          Každý žák si volí termín, který mu nejlépe vyhovuje. Učebna teorie se
          nachází v ulici Jaselská 1173 v Mnichově Hradišti a v případě dotazů nás
          můžete kdykoli kontaktovat.
        </p>
      </div>
    </PageIntro>
  )
}
