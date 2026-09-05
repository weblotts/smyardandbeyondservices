"use client";

import { useActionState, useState } from "react";
import { submitQuoteRequest, type PropertyType, type QuoteRequestResult } from "@/lib/markate";

const initialState: QuoteRequestResult | { ok: null } = { ok: null };

const contactTimes = ["Any time", "Morning", "Afternoon", "Evening"];

const MAX_IMAGES = 5;
const ACCEPTED_IMAGE_TYPES = "image/png,image/jpeg,image/gif";

async function handleSubmit(
  _prevState: QuoteRequestResult | { ok: null },
  formData: FormData,
): Promise<QuoteRequestResult> {
  return submitQuoteRequest({
    propertyType: (formData.get("propertyType") as PropertyType) ?? "residential",
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    address: String(formData.get("address") ?? ""),
    suiteUnit: String(formData.get("suiteUnit") ?? ""),
    message: String(formData.get("message") ?? ""),
    preferredContactTime: String(formData.get("preferredContactTime") ?? ""),
    hearAboutUs: String(formData.get("hearAboutUs") ?? ""),
  });
}

type PreviewImage = { file: File; url: string };

export default function QuoteForm() {
  const [state, formAction, isPending] = useActionState(handleSubmit, initialState);
  const [images, setImages] = useState<PreviewImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  if (state.ok) {
    return (
      <div className="card border border-primary-content/20 bg-base-100 p-6 text-base-content">
        <h3 className="font-display text-xl font-bold text-primary">Request sent</h3>
        <p className="mt-2 text-sm text-neutral">
          Thanks — we&apos;ll get back to you shortly with a free estimate.
        </p>
      </div>
    );
  }

  function addFiles(fileList: FileList | File[]) {
    const picked = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
    setImages((prev) => {
      const combined = [...prev, ...picked.map((file) => ({ file, url: URL.createObjectURL(file) }))];
      return combined.slice(0, MAX_IMAGES);
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) addFiles(e.target.files);
  }

  function removeImage(index: number) {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  }

  return (
    <form
      action={formAction}
      className="card space-y-4 border border-primary-content/20 bg-base-100 p-6 text-base-content"
    >
      <fieldset>
        <legend className="label font-display text-sm font-semibold text-primary">Property type</legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="propertyType"
              value="residential"
              defaultChecked
              className="radio radio-sm radio-primary"
            />
            Residential
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="propertyType" value="commercial" className="radio radio-sm radio-primary" />
            Commercial
          </label>
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label font-display text-sm font-semibold text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input input-bordered w-full bg-base-200 text-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label font-display text-sm font-semibold text-primary">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input input-bordered w-full bg-base-200 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label font-display text-sm font-semibold text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input input-bordered w-full bg-base-200 text-sm"
          />
        </div>

        <div>
          <label htmlFor="address" className="label font-display text-sm font-semibold text-primary">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            className="input input-bordered w-full bg-base-200 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="suiteUnit" className="label font-display text-sm font-semibold text-primary">
            Suite/Unit
          </label>
          <input
            id="suiteUnit"
            name="suiteUnit"
            type="text"
            className="input input-bordered w-full bg-base-200 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="preferredContactTime"
            className="label font-display text-sm font-semibold text-primary"
          >
            Preferred time to contact
          </label>
          <select
            id="preferredContactTime"
            name="preferredContactTime"
            defaultValue={contactTimes[0]}
            className="select select-bordered w-full bg-base-200 text-sm"
          >
            {contactTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label font-display text-sm font-semibold text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          placeholder="What do you need done?"
          className="textarea textarea-bordered w-full bg-base-200 text-sm"
        />
      </div>

      <div>
        <label htmlFor="hearAboutUs" className="label font-display text-sm font-semibold text-primary">
          How did you hear about us
        </label>
        <input
          id="hearAboutUs"
          name="hearAboutUs"
          type="text"
          className="input input-bordered w-full bg-base-200 text-sm"
        />
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="images" className="label font-display text-sm font-semibold text-primary">
            Photos
          </label>
          <span className="text-xs text-neutral">
            {images.length}/{MAX_IMAGES}
          </span>
        </div>
        <p className="mb-2 text-xs text-neutral">
          Show us the work to be done — PNG, JPG or GIF.
        </p>

        {images.length < MAX_IMAGES && (
          <label
            htmlFor="images"
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`flex cursor-pointer flex-col items-center gap-2 rounded-box border-2 border-dashed px-4 py-8 text-center transition ${
              isDragging
                ? "border-primary bg-primary/10"
                : "border-primary/30 bg-base-200 hover:border-primary/50 hover:bg-base-200/70"
            }`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m0-9l-3 3m3-3l3 3" />
              </svg>
            </span>
            <span className="text-sm text-neutral">
              <span className="font-display font-semibold text-primary">Click to upload</span> or drag and
              drop
            </span>
          </label>
        )}
        <input
          id="images"
          name="images"
          type="file"
          accept={ACCEPTED_IMAGE_TYPES}
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        {images.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {images.map((img, i) => (
              <div key={img.url} className="group relative aspect-square overflow-hidden rounded-field border border-primary/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={img.file.name} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  aria-label={`Remove ${img.file.name}`}
                  className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {state.ok === false && (
        <p className="text-sm text-error">
          Something went wrong sending your request. Please call or email us directly instead.
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-secondary w-full font-display text-secondary-content"
      >
        {isPending ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
