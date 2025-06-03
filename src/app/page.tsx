"use client";
import Image from "next/image";

import { useForm, useFieldArray } from "react-hook-form";
import { useForm as useFormspreeForm } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, watch, control, setValue } = useForm<any>({
    defaultValues: {
      persoane: [],
    },
  });

  const [state, submitForm] = useFormspreeForm("xqabkwpd");
  const [isClient, setIsClient] = useState(false);
  const nrPersoane = watch("nr_persoane");
  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "persoane",
  });
  const fieldCountRef = useRef(0);
  // useEffect(() => {
  //   const count = parseInt(nrPersoane) || 0;
  //   const diff = count - fields.length;

  //   if (diff > 0) {
  //     for (let i = 0; i < diff; i++) append({ nume: "" });
  //   } else if (diff < 0) {
  //     for (let i = 0; i < -diff; i++) remove(fields.length - 1);
  //   }
  // }, [nrPersoane]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const count = parseInt(nrPersoane) || 0;
    const currentCount = fieldCountRef.current;

    const diff = count - currentCount;

    if (diff > 0) {
      for (let i = 0; i < diff; i++) append({ nume: "" });
    } else if (diff < 0) {
      for (let i = 0; i < -diff; i++) remove(currentCount - i - 1);
    }

    fieldCountRef.current = count;
  }, [nrPersoane, isClient]);

  if (state.succeeded) {
    return <p>Mulțumim! Confirmarea a fost trimisă.</p>;
  }

  return (
    <>
      <div className="background-decor"></div>

      <div className="max-w-[900px] mx-auto my-8 p-5  rounded-xl shadow-md relative">
        <div className="md:h-20" />
        <h1 className="text-5xl">
          <b>Olivia Maria vă invită la botez! 🌿</b>
        </h1>
        <div className="h-6" />
        <Image
          src="/1.jpg"
          alt="Ieșirea din spital"
          className="section-image"
          width={800}
          height={450}
          priority
        />
        <div className="h-4" />
        <div>
          <h3 className="text-2xl">
            <b>Bunăăăă!</b>
            <span className="pl-1">
              Sunt Olivia Maria, cunoscută și ca fomilă, gălușca, gărgărița.
            </span>
          </h3>
        </div>
        <div className="h-4" />
        <p className="text-l">
          Sunt cea mai fericită bebelușă din lume, de când am venit pe lume, am
          adus cu mine multă bucurie (și câteva nopți nedormite) pentru mami și
          tati. Cum încă nu știu să vorbesc, i-am rugat pe părinții mei, să mă
          ajute să vă transmit această invitație specială. Sunt foarte
          emoționată, pentru că urmează prima mea petrecere importantă: botezul
          meu!
        </p>
        <div className="h-10" />

             <p className="text-3xl text-center">🌿🌿🌿🌿🌿</p>


        <div className="h-10" />

        <Image
          src="/spital.png"
          alt="Ieșirea din spital"
          className="section-image h-[90%]"
          width={800}
          height={450}
          priority
        />
        <div className="h-10" />

        <p className="text-3xl text-center">🌿🌿🌿🌿🌿</p>

        <div className="h-10" />

        <div className="md:flex md:felx-row lg:flex lg:felx-row gap-2 px-2">
          <div className="md:w-2/5 lg:w-2/5">
            <Image
              src="/parinti.jpg"
              alt="Ieșirea din spital"
              className="section-image"
              width={800}
              height={450}
              priority
            />
          </div>
          <div className="h-6 md:h-0 lg:h-0" />
          <div className="md:w-3/5 lg:w-3/5">
            <p className="text-lg md:pl-6 lg:pl-6">
              Intr-o după-amiază senină, ieșeam din spital cu ochii mijiți de la
              lumină și cu o bentiță ușor prea mare. Mami era cu lacrimi în
              ochi, tati încerca să pară stăpân pe situație (dar avea vocea
              tremurată), iar lumea deja mă privea ca pe o vedetă.
            </p>
            <div className="h-4" />

            <p className="text-lg md:pl-6 lg:pl-6">
              A fost primul meu pas în lume, prima plimbare, prima bătaie de
              vânt pe obrăjori. Eu, însă, am ținut să-mi fac simțită prezența și
              am plâns puțin, doar ca să fiu sigură că toți ochii rămân pe mine.
              În brațele mamei, drumul spre casă a fost plin de căldură și
              iubire. A fost o zi pe care nu o voi uita (deși recunosc că am
              ațipit imediat ce am ajuns în pătuțul meu 😊).
            </p>
            <div className="h-2" />
            <p className="text-lg md:pl-6 lg:pl-6">
              Încă de la început am știut să-mi aleg părinții cu grijă:{" "}
              <span className="highlight text-xl">Raluca</span> și{" "}
              <span className="highlight text-xl">Mihai</span> – adică mami,
              care e organizată, atentă la detalii, și tati, spontan, cu capul
              plin de idei, Formula 1, fotbal și… politică.
            </p>
          </div>
        </div>

        <div className="md:flex md:felx-row lg:flex lg:felx-row gap-2 px-2">
          <div className="md:w-1/2 lg:w-3/5">
            <div className="h-8" />

            <p className="text-lg md:pr-6 lg:pr-6">
              A fost primul meu pas în lume, prima plimbare, prima bătaie de
              vânt pe obrăjori. Eu, însă, am ținut să-mi fac simțită prezența și
              am plâns puțin, doar ca să fiu sigură că toți ochii rămân pe mine.
              În brațele mamei, drumul spre casă a fost plin de căldură și
              iubire. A fost o zi pe care nu o voi uita (deși recunosc că am
              ațipit imediat ce am ajuns în pătuțul meu 😊).
            </p>
            <div className="h-2" />
            <p className="text-lg md:pr-6 ">
              Se spune că fiecare copil primește o pereche de îngeri păzitori
              aici pe pământ. Eu am avut noroc dublu: i-am primit pe{" "}
              <span className="highlight text-xl">Hamude</span> și{" "}
              <span className="highlight text-xl">Iulia</span>.
            </p>
          </div>
          <div className=" md:w-2/5 lg:w-1/2">
            <Image
              src="/nasi.png"
              alt="Ieșirea din spital"
              className="section-image !h-[28vh] mt-10"
              width={900}
              height={650}
              priority
            />
          </div>
        </div>
        <div className="h-4" />
        <div className="px-2">
          <p className="text-lg md:pr-6 lg:pr-6">
            Oameni minunați, care știu mereu să spună cuvintele potrivite, să
            aducă liniște, zâmbete și sfaturi bune chiar și când adulții par
            pierduți prin hățișul vieții de zi cu zi.
          </p>
          <p className="text-xl md:pr-6 lg:pr-6">
            <em>
              El – calm, înțelept, cu o privire care parcă zice: „stai liniștit,
              totul o să fie bine”.
              <br />
              Ea – caldă, blândă, cu inima cât o zi de vară.
            </em>
          </p>
          <p className="text-lg md:pr-6 lg:pr-6">
            Când mami și tati i-au întrebat dacă vor să fie nașii mei, nici n-au
            clipit. N-au cerut timp de gândire. N-au întrebat “dar sigur?”, “dar
            sunteți pregătiți?”.
          </p>
          <p className="text-xl md:pr-6 lg:pr-6 pt-2">
            <b>
              {" "}
              <em>
                Au spus doar:
                <br />
                „Da, cu toată inima.”
              </em>
            </b>
          </p>
          <p className="text-lg md:pr-6 lg:pr-6">Și s-a simțit. 💚</p>
          <p className="text-lg md:pr-6 lg:pr-6">
            Așa că uite-ne aici, toți cinci – eu, mami, tati, și nașii mei dragi
            – într-o poză tare dragă nouă, dintr-un început de poveste care
            sigur o să aibă multe capitole frumoase.
          </p>
          <p className="text-xl md:pr-6 lg:pr-6 pt-2">
            <b>
              <em>P.S.</em>
            </b>{" "}
            Sper doar că au știut ce fac… Eu plâng tare, mănânc mult și am deja
            gusturi sofisticate la bavețele. 😋
          </p>
          <div className="h-4" />
          <Image
            src="/2.jpg"
            alt="Ieșirea din spital"
            className="section-image"
            width={800}
            height={450}
            priority
          />

          <h3 className="text-2xl">
            Vă aștept cu drag la cea mai importantă zi de până acum din viața
            mea de bebeluș:
          </h3>
          <div className="h-4" />
          <p className="">
            📍 <strong>Biserica „Sfântul Nicolae Dintr-o Zi”</strong>
            <br />⏰ <strong>Duminica, 13 iulie, ora 14:00</strong>
          </p>
          <p>
            🕺💃 După ce mă fac domnișoară cu acte-n regulă (și o picătură de
            mir pe frunte), vă poftesc la chef:
          </p>
          <p>
            📍 <strong>Bokaa, salon B-Lake, Buftea</strong>
            <br />
            🕓 <strong>de la 17:00 până la 01:00</strong>
            <br />
            (mă ține până târziu, stați liniștiți – sunt antrenată! 💃🎉)
          </p>
          <p className="signoff text-l">
            {" "}
            Cu drag,
            <br />
            <span className="name">Olivia Maria</span>
            <br />
            <small>(vă pup dulce!)</small>
          </p>
          <div className="h-4" />
          <form
            onSubmit={handleSubmit((data) => {
              console.log("Form Data:", data);
              submitForm(data);
            })}
            className="space-y-4"
          >
            <div>
              <label htmlFor="nume">Numele tău:</label>
              <input
                id="nume"
                placeholder="Numele tău"
                {...register("nume", { required: true })}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 h-10"
              />
            </div>

            <div>
              <label className="block mb-1">Vei participa?</label>
              <Controller
                control={control}
                name="participare"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-white border border-gray-300 rounded px-3 py-2  h-10 text-black">
                      <SelectValue placeholder="Alege opțiunea" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="da">Da</SelectItem>
                      <SelectItem value="nu">Nu</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <label htmlFor="nr_persoane">
                Număr total de persoane (inclusiv copii):
              </label>
              <input
                type="number"
                id="nr_persoane"
                placeholder="Număr total de persoane (inclusiv copii)"
                {...register("nr_persoane", { required: true, min: 1 })}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2  h-10 "
              />
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="mb-4 space-y-2">
                <label htmlFor={`persoane[${index}].nume`}>
                  Nume persoană #{index + 1}:
                </label>
                <input
                  {...register(`persoane.${index}.nume`, { required: true })}
                  id={`persoane-${index}`}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 h-10"
                />

                <label htmlFor={`persoane[${index}].participare`}>
                  Meniu:
                </label>
                <Controller
                  control={control}
                  name={`persoane.${index}.participare`}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full bg-white border border-gray-300 rounded px-3 py-2 h-10 text-black">
                        <SelectValue placeholder="Alege opțiunea" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="Meniu Copil">Meniu Copil</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            ))}

            <div>
              <label className="block mb-1">Ai nevoie de cazare?</label>
              <Controller
                control={control}
                name="cazare"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-black">
                      <SelectValue placeholder="Alege opțiunea" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nu">Nu</SelectItem>
                      <SelectItem value="da">Da</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex justify-center"
            >
              Trimite confirmarea
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
